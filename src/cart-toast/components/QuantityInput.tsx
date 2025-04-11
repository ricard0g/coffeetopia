import { FC } from 'preact/compat';
import { CartItem } from '../types/cart';
import { formatPrice } from '../utils/formatPrice';

interface QuantityInputProps {
  item: CartItem;
  quantity: number;
  lineItemPrice: number;
  lineItemDiscountedPrice: number;
  updateCart: (itemId: number, quantity: number) => Promise<void>;
}

export const QuantityInput: FC<QuantityInputProps> = ({
  item,
  quantity,
  lineItemPrice,
  lineItemDiscountedPrice,
  updateCart,
}) => {
  const handleChange = (e: Event) => {
    const newQuantity = parseInt((e.target as HTMLSelectElement).value);
    if (item.id) {
      updateCart(item.id, newQuantity);
    }
  };

  return (
    <div>
      <div className={`cart-toast__item-quantity-wrapper`}>
        <form action="cart/update.js" method="post" className={`cart-toast__item-quantity-form`}>
          <select value={quantity} name="quantity" id="quantity-input" onChange={handleChange}>
            <option value="0">Remove</option>
            {Array.from({ length: 15 }, (_, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </form>
      </div>
      <p
        className={`${
          lineItemPrice === lineItemDiscountedPrice ? '' : 'cart-toast__line-item-price-dashed'
        }`}
      >
        {formatPrice(lineItemPrice)}
      </p>
      <p className={`cart-toast__discounted-price`}>
        {lineItemPrice === lineItemDiscountedPrice ? '' : formatPrice(lineItemDiscountedPrice)}
      </p>
    </div>
  );
};
