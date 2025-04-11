import { FC } from 'preact/compat';
import { CartItem } from '../types/cart';
import { QuantityInput } from './QuantityInput';

interface LineItemProps {
  index: number;
  item: CartItem;
  quantity: number;
  lineItemPrice: number;
  lineItemDiscountedPrice: number;
  updateCart: (itemId: number, quantity: number) => Promise<void>;
  isLoading?: boolean;
}

export const LineItem: FC<LineItemProps> = ({ 
  index, 
  item, 
  quantity, 
  lineItemPrice, 
  lineItemDiscountedPrice, 
  updateCart,
  isLoading = false 
}) => {
  return (
    <li key={index} className={`cart-toast__item ${isLoading ? 'cart-toast__item-loading' : ''}`}>
      <div className={`cart-toast__item-image-wrapper`}>
        <img
          alt={String(item.featured_image?.alt)}
          src={String(item.featured_image?.url)}
          className={`cart-toast__item-image ${isLoading ? 'cart-toast__item-image-loading' : ''}`}
        />
        {isLoading && <div className="cart-toast__item-loading-overlay"></div>}
      </div>
      <div className={`cart-toast__item-details`}>
        <a href={item.url}>{item.title}</a>
        <p>Coffee Product From: Ground</p>
        <p>Flavor: Coffee</p>
      </div>
      <div className={`cart-toast__item-quantity`}>
        <QuantityInput 
          item={item} 
          quantity={quantity} 
          lineItemPrice={lineItemPrice} 
          updateCart={updateCart} 
          lineItemDiscountedPrice={lineItemDiscountedPrice} 
          isLoading={isLoading}
        />
      </div>
    </li>
  );
};
