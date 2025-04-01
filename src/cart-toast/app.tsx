import { useEffect, useState } from 'preact/hooks';

export function CartToast({ cartItemCount: initialCartItemCount }: { cartItemCount: number }) {
  const [cartItemCount, setCartItemCount] = useState(initialCartItemCount);

  useEffect(() => {
    console.log('Cart Item Count From Preact', cartItemCount);
    
    // Set up observer to watch for changes to data-item-count attribute
    const cartToastElement = document.getElementById('cart-toast');
    if (!cartToastElement) return;
    
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' && 
          mutation.attributeName === 'data-item-count'
        ) {
          const newCount = parseInt(cartToastElement.dataset.itemCount || '0', 10);
          setCartItemCount(newCount);
        }
      });
    });
    
    // Start observing
    observer.observe(cartToastElement, { attributes: true });
    
    // Clean up observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="cart-toast-container">
        <p>Items in cart: {cartItemCount}</p>
        {/* Your discount messaging logic here */}
        {cartItemCount > 0 && cartItemCount < 3 && (
          <p>Add {3 - cartItemCount} more items for 5% discount!</p>
        )}
      </div>
    </>
  );
}
