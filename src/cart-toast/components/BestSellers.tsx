import { FC, useEffect, useState } from 'preact/compat';
import { Product } from '../types/products';
import { getBestSellers, getProductId } from '../utils/getBestSellers';

export const BestSellers: FC = () => {
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchBestSellers = async () => {
      setIsLoading(true);
      setHasError(false);
      
      try {
        const productId = await getProductId();
        const intent = 'related';
        
        // Add a small delay to show loading state (can be removed in production)
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const bestSellersData = await getBestSellers({ productId, intent });
        setBestSellers(bestSellersData);
      } catch (error) {
        console.error('Error fetching best sellers:', error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  if (isLoading) {
    return (
      <div className="cart-toast__best-sellers-loading">
        {[1, 2, 3].map((placeholder) => (
          <div key={placeholder} className="cart-toast__best-sellers-loading-item">
            <div className="cart-toast__best-sellers-loading-image"></div>
            <div className="cart-toast__best-sellers-loading-text"></div>
            <div className="cart-toast__best-sellers-loading-text" style={{ width: '60%', marginTop: '8px' }}></div>
          </div>
        ))}
      </div>
    );
  }
  
  if (hasError || bestSellers.length === 0) {
    return (
      <div className="cart-toast__best-sellers-error">
        <p>Unable to load product recommendations.</p>
        <button 
          onClick={() => {
            setIsLoading(true);
            // Re-fetch best sellers
            setBestSellers([]);
            setHasError(false);
            
            const fetchBestSellers = async () => {
              try {
                const productId = await getProductId();
                const intent = 'related';
                const bestSellersData = await getBestSellers({ productId, intent });
                setBestSellers(bestSellersData);
              } catch (error) {
                console.error('Error fetching best sellers:', error);
                setHasError(true);
              } finally {
                setIsLoading(false);
              }
            };
            
            fetchBestSellers();
          }}
          className="cart-toast__best-sellers-retry"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <ul className={`cart-toast__best-sellers-list`}>
        {bestSellers.map((product) => (
          <li key={product.id} className={`cart-toast__best-sellers-item`}>
            <a href={product.url}>
              <figure className={`cart-toast__best-sellers-figure`}>
                <span className={`cart-toast__best-sellers-icon-arrow`}>
                  <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      {' '}
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{' '}
                    </g>
                  </svg>
                </span>
                <div className={`cart-toast__best-sellers-img-wrapper`}>
                  <img className={`cart-toast__best-sellers-img`} src={product.featured_image} alt={product.title} />
                </div>
                <figcaption>
                  <a href={product.url}>{product.title}</a>
                </figcaption>
              </figure>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
