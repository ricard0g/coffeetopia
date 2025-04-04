import { FC, useEffect, useState, useCallback } from 'preact/compat';
import { CartState, CartItem, LineItems } from './types/cart';
import { LineItem, ProgressBar } from './components';

interface CartToastProps {
  cartTotalPrice: number;
  cartCurrency: string;
  cartState: CartState;
}

export const CartToast: FC<CartToastProps> = ({
  cartTotalPrice: initialCartTotalPrice,
  cartCurrency,
  cartState: initialCartState,
}) => {
  const [cartState, setCartState] = useState<CartState>(initialCartState);
  const [cartTotalPrice, setCartTotalPrice] = useState(initialCartTotalPrice / 100);
  const [opened, setOpened] = useState(false);
  const maxPriceBoost: number = 72;

  // Add state for line items
  const [lineItems, setLineItems] = useState<LineItems>(() => {
    const initialLineItems: LineItems = {};
    initialCartState.items?.forEach((item) => {
      if (item.key) {
        initialLineItems[item.key] = {
          quantity: item.quantity ?? 0,
          lineItemPrice: item.final_line_price ?? 0,
        };
      }
    });
    return initialLineItems;
  });

  // Calculate total items from lineItems
  const getTotalItems = useCallback(() => {
    return Object.values(lineItems).reduce((total, item) => total + item.quantity, 0);
  }, [lineItems]);

  // Add update cart function
  const updateCart = async (itemKey: string, quantity: number) => {
    const formData = new FormData();
    formData.append(`updates[${itemKey}]`, String(quantity));

    try {
      const response = await fetch('/cart/update.js', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setCartTotalPrice(data.total_price / 100);

      // Update line item state
      const updatedItem = data.items.find((i: CartItem) => i.key === itemKey);
      if (updatedItem) {
        setLineItems((prev) => ({
          ...prev,
          [itemKey]: {
            quantity: updatedItem.quantity ?? 0,
            lineItemPrice: updatedItem.final_line_price ?? 0,
          },
        }));
      } else {
        // If item is not found in the response, it means it was removed
        setLineItems((prev) => {
          const newState = { ...prev };
          delete newState[itemKey];
          return newState;
        });
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  useEffect(() => {
    console.log('Cart Item Count From Preact', cartTotalPrice);

    // Set up observer to watch for changes to data-item-count attribute
    const cartToastElement = document.getElementById('cart-toast');
    if (!cartToastElement) return;

    const observer = new MutationObserver((mutations) => {
      let totalPriceChanged = false;
      let cartStateChanged = false;

      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          if (mutation.attributeName === 'data-total-price') {
            totalPriceChanged = true;
          } else if (mutation.attributeName === 'data-cart-state') {
            cartStateChanged = true;
          }
        }
      });

      if (totalPriceChanged) {
        const newTotalPrice = parseInt(cartToastElement.dataset.totalPrice || '0');
        setCartTotalPrice(newTotalPrice / 100);
      }

      if (cartStateChanged && cartToastElement.dataset.cartState) {
        try {
          const newCartState = JSON.parse(cartToastElement.dataset.cartState) as CartState;
          setCartState(newCartState);
        } catch (e) {
          console.error('Error parsing cart state:', e);
        }
      }
    });

    // Start observing
    observer.observe(cartToastElement, { attributes: true });

    // Clean up observer when component unmounts
    return () => observer.disconnect();
  }, [cartTotalPrice, cartState]);

  const updateLineItems = () => {
    const updatedLineItems: LineItems = {};
    cartState.items?.forEach((item) => {
      if (item.key) {
        updatedLineItems[item.key] = {
          quantity: item.quantity ?? 0,
          lineItemPrice: item.final_line_price ?? 0,
        };
      }
    });
    setLineItems(updatedLineItems);
  };

  useEffect(() => {
    console.log('Updated Cart State Use Effect bro', cartState);
    updateLineItems();
  }, [cartState]);

  const handleBoostHeaderClick = () => {
    setOpened(!opened);
  };

  const handleBackdropClick = () => {
    setOpened(false);
  };

  const checkBoostText = useCallback(
    (cartTotalPrice: number) => {
      if (cartTotalPrice < 18) {
        return `🎁 Spend ${cartCurrency}${18 - cartTotalPrice},  get 5% off!`;
      } else if (cartTotalPrice >= 20 && cartTotalPrice < 38) {
        return `🎁 Spend ${cartCurrency}${34 - cartTotalPrice},  get 10% off!`;
      } else if (cartTotalPrice >= 34 && cartTotalPrice < 56) {
        return `🎁 Spend ${cartCurrency}${52 - cartTotalPrice},  get 15% off!`;
      } else if (cartTotalPrice >= 52 && cartTotalPrice < 72) {
        return `🎁 Spend ${cartCurrency}${70 - cartTotalPrice},  get 20% off!`;
      } else {
        return `🎉 You have unlocked the 20% off!`;
      }
    },
    [cartTotalPrice]
  );

  return (
    <>
      <div
        onClick={handleBackdropClick}
        class="cart-toast__backdrop"
        style={opened ? 'display: block' : 'display: none'}
      ></div>
      <div className={`cart-toast__wrapper ${opened ? 'cart-toast__open' : ''}`}>
        <div onClick={handleBoostHeaderClick} className="cart-toast__header">
          <p className={`cart-toast__header-text`}>
            <span className={`cart-toast__total-price-text ${opened ? 'cart-toast__total-price-text-centered' : ''}`}>
              {checkBoostText(cartTotalPrice)}
            </span>
            <span className={`cart-toast__header-icons`}>
              {!opened ? (
                <>
                  <span className={`cart-toast__cart-icon`}>
                    <span className="cart-toast__cart-count-bubble">
                      {getTotalItems()}
                    </span>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path
                          d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                          stroke="#fff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                      </g>
                    </svg>
                  </span>
                  <span>
                    <svg
                      fill="#ffffff"
                      width="15px"
                      height="15px"
                      viewBox="0 0 32 40"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path d="M0.256 23.481c0 0.269 0.106 0.544 0.313 0.75 0.412 0.413 1.087 0.413 1.5 0l14.119-14.119 13.913 13.912c0.413 0.413 1.087 0.413 1.5 0s0.413-1.087 0-1.5l-14.663-14.669c-0.413-0.412-1.088-0.412-1.5 0l-14.869 14.869c-0.213 0.212-0.313 0.481-0.313 0.756z"></path>{' '}
                      </g>
                    </svg>
                  </span>
                </>
              ) : (
                <>
                  <button className={`cart-toast__close-btn`}>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="-0.5 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        {' '}
                        <path
                          d="M3 21.32L21 3.32001"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                        <path
                          d="M3 3.32001L21 21.32"
                          stroke="#ffffff"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{' '}
                      </g>
                    </svg>
                  </button>
                </>
              )}
            </span>
          </p>
          <ProgressBar maxPrice={maxPriceBoost} cartTotalPrice={cartTotalPrice} />
        </div>
        <div className={`cart-toast__content`}>
          {cartState.item_count ? (
            <>
              <div className={`cart-toast__items-list-wrapper`}>
                <ul className={`cart-toast__items-list`}>
                  {cartState.items?.map((item, index) => {
                    if (!item.key) return null;
                    const lineItem = lineItems[item.key];
                    // Only render items with quantity > 0
                    if (!lineItem || lineItem.quantity <= 0) return null;
                    return (
                      <LineItem
                        key={index}
                        index={index}
                        item={item}
                        quantity={lineItem.quantity}
                        lineItemPrice={lineItem.lineItemPrice}
                        updateCart={updateCart}
                      />
                    );
                  })}
                </ul>
              </div>
            </>
          ) : (
            'No items in cart'
          )}
        </div>
      </div>
    </>
  );
};
