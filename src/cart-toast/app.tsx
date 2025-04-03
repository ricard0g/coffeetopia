import { useEffect, useState, useCallback } from 'preact/hooks';

const formatPrice = (priceInCents: number, currency = 'EUR') => {
  const euros = priceInCents / 100;
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
  }).format(euros);
};

const RewardTier = ({
  tierLevel,
  maxPrice,
  cartTotalPrice,
}: {
  tierLevel: string;
  maxPrice: number;
  cartTotalPrice: number;
}) => {
  return (
    <div className={`cart-toast__reward-tier`}>
      <div className={`cart-toast__reward-tier-icon-wrapper`}>
        <div
          className={`cart-toast__reward-tier-icon ${
            cartTotalPrice >= maxPrice ? 'cart-toast__reward-tier-icon-active' : ''
          }`}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            id="discount"
            class="icon glyph"
            fill="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M21.59,9.83A4.21,4.21,0,0,1,21.17,9,4.73,4.73,0,0,1,21,8.07a4.19,4.19,0,0,0-.64-2.16,4.15,4.15,0,0,0-1.87-1.28,4.36,4.36,0,0,1-.84-.43A4.55,4.55,0,0,1,17,3.54a4.29,4.29,0,0,0-1.81-1.4A4.19,4.19,0,0,0,13,2.21a4.24,4.24,0,0,1-1.94,0A4.19,4.19,0,0,0,8.8,2.14,4.29,4.29,0,0,0,7,3.54a4.55,4.55,0,0,1-.66.66,4.36,4.36,0,0,1-.84.43A4.15,4.15,0,0,0,3.62,5.91,4.19,4.19,0,0,0,3,8.07,4.73,4.73,0,0,1,2.83,9a4.21,4.21,0,0,1-.42.81A4.3,4.3,0,0,0,1.64,12a4.3,4.3,0,0,0,.77,2.17,4.21,4.21,0,0,1,.42.81,4.73,4.73,0,0,1,.15.95,4.19,4.19,0,0,0,.64,2.16,4.15,4.15,0,0,0,1.87,1.28,4.36,4.36,0,0,1,.84.43,4.55,4.55,0,0,1,.66.66,4.29,4.29,0,0,0,1.81,1.4,2.91,2.91,0,0,0,.87.13,6,6,0,0,0,1.36-.2,4.24,4.24,0,0,1,1.94,0,4.19,4.19,0,0,0,2.23.07A4.29,4.29,0,0,0,17,20.46a4.55,4.55,0,0,1,.66-.66,4.36,4.36,0,0,1,.84-.43,4.15,4.15,0,0,0,1.87-1.28A4.19,4.19,0,0,0,21,15.93a4.73,4.73,0,0,1,.15-.95,4.21,4.21,0,0,1,.42-.81A4.3,4.3,0,0,0,22.36,12,4.3,4.3,0,0,0,21.59,9.83ZM9.5,8A1.5,1.5,0,1,1,8,9.5,1.5,1.5,0,0,1,9.5,8Zm5,8A1.5,1.5,0,1,1,16,14.5,1.5,1.5,0,0,1,14.5,16Zm1.21-6.29-6,6a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42l6-6a1,1,0,0,1,1.42,1.42Z"
                style="fill:#fff"
              ></path>
            </g>
          </svg>
        </div>
        <span className={`cart-toast__reward-tier-text`}>
          {cartTotalPrice < maxPrice ? (
            tierLevel
          ) : (
            <>
              <span className={`cart-toast__reward-tier-text-boost`}>
                <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
                      fill="#de9151"
                    ></path>{' '}
                  </g>
                </svg>
              </span>
              <span className={`cart-toast__reward-tier-text-span`}>{tierLevel}</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

type RewardTierType = {
  tierLevel: string;
  maxPrice: number;
};

const ProgressBar = ({ cartTotalPrice, maxPrice }: { cartTotalPrice: number; maxPrice: number }) => {
  const progress = useCallback(() => Math.max(0, Math.min(100, (cartTotalPrice / maxPrice) * 100)), [cartTotalPrice]);
  const rewardTiers: RewardTierType[] = [
    {
      tierLevel: '5% off!',
      maxPrice: 18,
    },
    {
      tierLevel: '10% off!',
      maxPrice: 36,
    },
    {
      tierLevel: '15% off!',
      maxPrice: 54,
    },
    {
      tierLevel: '20% off!',
      maxPrice: 72,
    },
  ];
  return (
    <>
      <div className={`cart-toast__progress-bar-wrapper`}>
        <div className={`cart-toast__progress-bar`}>
          <div
            className={`cart-toast__progress-bar-fill`}
            style={`display: inline-block; width: calc(${progress()}% + 1px);`}
          ></div>
        </div>

        <div className={`cart-toast__tier-bar`}>
          {rewardTiers.map((tier, index) => {
            return (
              <>
                <RewardTier
                  key={index}
                  tierLevel={tier.tierLevel}
                  maxPrice={tier.maxPrice}
                  cartTotalPrice={cartTotalPrice}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

interface CartItem {
  id?: string | number;
  properties?: Record<string, string>;
  quantity?: number;
  variant_id?: string | number;
  key?: string;
  title?: string;
  price?: number;
  original_price?: number;
  discounted_price?: number;
  line_price?: number;
  original_line_price?: number;
  total_discount?: number;
  discounts?: Array<any>;
  sku?: string;
  grams?: number;
  vendor?: string;
  taxable?: boolean;
  product_id?: number;
  product_has_only_default_variant?: boolean;
  gift_card?: boolean;
  final_price?: number;
  final_line_price?: number;
  url?: string;
  featured_image?: Record<string, string | number>;
  image?: string;
  handle?: string;
  requires_shipping?: boolean;
  product_type?: string;
  product_title?: string;
  product_description?: string;
  variant_title?: string;
  variant_options?: Array<string>;
  options_with_values?: Array<{ name: string; value: string }>;
  line_level_discount_allocations?: Array<any>;
  line_level_total_discount?: number;
  quantity_rule?: Record<string, any>;
  has_components?: boolean;
  selling_plan_allocation?: any;
}

export interface CartState {
  token?: string;
  note?: string;
  attributes?: Record<string, string>;
  original_total_price?: number;
  total_price?: number;
  total_discount?: number;
  total_weight?: number;
  item_count?: number;
  items?: Array<CartItem>;
}

function LineItem({
  index,
  item,
  setCartTotalPrice,
}: {
  index: number;
  item: CartItem;
  setCartTotalPrice: (price: number) => void;
}) {
  const [quantity, setQuantity] = useState(item.quantity ?? 0);
  const [lineItemPrice, setLineItemPrice] = useState(item.final_line_price ?? 0);

  useEffect(() => {
    console.log('Line Item Count', item.quantity);
  });

  return (
    <li key={index} className={`cart-toast__item`}>
      <div className={`cart-toast__item-image-wrapper`}>
        <img
          alt={String(item.featured_image?.alt)}
          src={String(item.featured_image?.url)}
          className={`cart-toast__item-image`}
        />
      </div>
      <div className={`cart-toast__item-details`}>
        <a href={item.url}>{item.title}</a>
        <p>Coffee Product From: Ground</p>
        <p>Flavor: Coffee</p>
      </div>
      <div className={`cart-toast__item-quantity`}>
        <QuantityInput
          quantity={quantity}
          setQuantity={setQuantity}
          setCartTotalPrice={setCartTotalPrice}
          item={item}
          lineItemPrice={lineItemPrice}
          setLineItemPrice={setLineItemPrice}
        />
      </div>
    </li>
  );
}

function QuantityInput({
  item,
  setCartTotalPrice,
  quantity,
  setQuantity,
  lineItemPrice,
  setLineItemPrice,
}: {
  item: CartItem;
  setCartTotalPrice: (price: number) => void;
  quantity?: number;
  setQuantity: (quantity: number) => void;
  lineItemPrice: number;
  setLineItemPrice: (price: number) => void;
}) {
  useEffect(() => {
    setQuantity(item.quantity ?? 0);
    setLineItemPrice(item.final_line_price ?? 0);
  }, [item.key]);

  useEffect(() => {
    const formData = new FormData();
    formData.append(`updates[${item.key}]`, String(quantity));

    const updateCart = async () => {
      try {
        const response = await fetch('/cart/update.js', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        console.log('Data Response', data);
        setCartTotalPrice(data.total_price / 100);
        setLineItemPrice(data.items.find((i: CartItem) => i.key === item.key)?.final_line_price ?? 0);
      } catch (error) {
        console.error('Error updating cart:', error);
      }
    };

    console.log('Quantity', quantity);
    updateCart();
  }, [quantity, item.key]);

  const handleChange = (e: Event) => {
    const newQuantity = parseInt((e.target as HTMLSelectElement).value);
    setQuantity(newQuantity);
  };

  return (
    <div>
      <div className={`cart-toast__item-quantity-wrapper`}>
        <form action="cart/update.js" method="post" className={`cart-toast__item-quantity-form`}>
          <select value={quantity} name="quantity" id="quantity-input" onChange={handleChange}>
            <option value="0">Remove</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </form>
      </div>
      <p>{formatPrice(lineItemPrice)}</p>
    </div>
  );
}

export function CartToast({
  cartTotalPrice: initialCartTotalPrice,
  cartCurrency,
  cartState: initialCartState,
}: {
  cartTotalPrice: number;
  cartCurrency: string;
  cartState: CartState;
}) {
  const [cartState, setCartState] = useState<CartState>(initialCartState);
  const [cartTotalPrice, setCartTotalPrice] = useState(initialCartTotalPrice / 100);
  const [opened, setOpened] = useState(false);
  const maxPriceBoost: number = 72;

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
  }, [cartTotalPrice]);

  useEffect(() => {
    console.log('Updated Cart State', cartState);
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
                  <span>
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
                    return <LineItem key={index} index={index} item={item} setCartTotalPrice={setCartTotalPrice} />;
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
}
