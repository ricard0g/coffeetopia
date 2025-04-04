import { FC } from 'preact/compat';
import { CartItem } from '../types/cart';
import { QuantityInput } from './QuantityInput';

interface LineItemProps {
    index: number;
    item: CartItem;
    quantity: number;
    lineItemPrice: number;
    updateCart: (itemKey: string, quantity: number) => Promise<void>;
}


export const LineItem: FC<LineItemProps> = ({
  index,
  item,
  quantity,
  lineItemPrice,
  updateCart,
}) => {
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
        <QuantityInput item={item} quantity={quantity} lineItemPrice={lineItemPrice} updateCart={updateCart} />
      </div>
    </li>
  );
}