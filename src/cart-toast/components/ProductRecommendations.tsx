import { FC, useEffect, useState } from 'preact/compat';
import { Product } from '../types/products';
import { getBestSellers } from '../utils/getBestSellers';

interface ProductRecommendationsProps {
  productId: number;
}

export const ProductRecommendations: FC<ProductRecommendationsProps> = ({ productId }) => {
  const [productRecommendations, setProductRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductRecommendations = async () => {
      setIsLoading(true);
      try {
        const intent = 'related';

        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate loading delay
        console.log(productId);

        const productRecommendationsData = await getBestSellers({ productId, intent });
        console.log(productRecommendationsData);
        setProductRecommendations(productRecommendationsData);
      } catch (e) {
        console.error('Error fetching product recommendations:', e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductRecommendations();
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

  return (
    <div>
      <ul>
        {productRecommendations.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
