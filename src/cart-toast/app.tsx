import { useEffect, useState, useCallback } from 'preact/hooks';

const ProgressBar = ({ cartTotalPrice, maxPrice }: { cartTotalPrice: number; maxPrice: number }) => {
  const progress = useCallback(() => Math.max(0, Math.min(100, (cartTotalPrice / maxPrice) * 100)), [cartTotalPrice]);
  return (
    <>
      <div className={`cart-toast__progress-bar`}>
        <div className={`cart-toast__progress-bar-fill`} style={`display: inline-block; width: ${progress()}%;`}></div>
      </div>
    </>
  );
};

export function CartToast({
  cartTotalPrice: initialCartTotalPrice,
  cartCurrency,
}: {
  cartTotalPrice: number;
  cartCurrency: string;
}) {
  const [cartTotalPrice, setCartTotalPrice] = useState(initialCartTotalPrice / 100);
  const [opened, setOpened] = useState(false);
  const maxPriceBoost: number = 72;

  useEffect(() => {
    console.log('Cart Item Count From Preact', cartTotalPrice);

    // Set up observer to watch for changes to data-item-count attribute
    const cartToastElement = document.getElementById('cart-toast');
    if (!cartToastElement) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-total-price') {
          const newTotalPrice = parseInt(cartToastElement.dataset.totalPrice || '0');
          setCartTotalPrice(newTotalPrice / 100);
        }
      });
    });

    // Start observing
    observer.observe(cartToastElement, { attributes: true });

    // Clean up observer when component unmounts
    return () => observer.disconnect();
  }, []);

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
      <div onClick={handleBoostHeaderClick} className={`cart-toast__wrapper ${opened ? 'cart-toast__open' : ''}`}>
        <div className="cart-toast__header">
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
      </div>
    </>
  );
}
