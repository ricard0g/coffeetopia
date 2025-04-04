import { FC } from 'preact/compat';
import { CartItem } from '../types/cart';
import { formatPrice } from '../utils/formatPrice';

interface QuantityInputProps {
  item: CartItem;
  quantity: number;
  lineItemPrice: number;
  updateCart: (itemKey: string, quantity: number) => Promise<void>;
}

export const QuantityInput: FC<QuantityInputProps> = ({ item, quantity, lineItemPrice, updateCart }) => {
  const handleChange = (e: Event) => {
    const newQuantity = parseInt((e.target as HTMLSelectElement).value);
    if (item.key) {
      updateCart(item.key, newQuantity);
    }
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
};
