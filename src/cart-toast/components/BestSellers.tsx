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
            <figure className={`cart-toast__best-sellers-figure`}>
              <div className={`cart-toast__best-sellers-img-wrapper`}>
                <img className={`cart-toast__best-sellers-img`} src={product.featured_image} alt={product.title} />
              </div>
              <figcaption>
                <a href={product.url}>{product.title}</a>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
};
