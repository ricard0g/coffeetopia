import { FC, useEffect, useState } from 'preact/compat';
import { Product } from '../types/products';
import { getBestSellers, getProductId } from '../utils/getBestSellers';

export const BestSellers: FC = () => {
  const [bestSellers, setBestSellers] = useState<Product[]>([]);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const productId = await getProductId(); // Replace with actual product ID
        const intent = 'related'; // Replace with actual intent
        const bestSellersData = await getBestSellers({ productId, intent });
        setBestSellers(bestSellersData);
      } catch (error) {
        console.error('Error fetching best sellers:', error);
      }
    };

    fetchBestSellers();
  }, []);

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
