import { FC, useEffect, useState } from 'preact/compat';
import { Product } from '../types/products';
import { getBestSellers } from '../utils/getBestSellers';
import { addToCart } from '../utils/addToCart';
import { formatPrice } from '../utils/formatPrice';

interface ProductRecommendationsProps {
  productId: number;
  updateCart: (itemId: number, quantity: number) => Promise<void>;
}

export const ProductRecommendations: FC<ProductRecommendationsProps> = ({ productId, updateCart }) => {
  const [productRecommendations, setProductRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductRecommendations = async () => {
      setIsLoading(true);
      try {
        const intent = 'related';

        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate loading delay

        const productRecommendationsData = await getBestSellers({ productId, intent });
        setProductRecommendations(productRecommendationsData);
      } catch (e) {
        console.error('Error fetching product recommendations:', e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductRecommendations();
  }, [updateCart]);

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

  const handleAddToCart = (productId: number, quantity: number) => {
    const formData = {
      items: [
        {
          id: productId,
          quantity: quantity,
        },
      ],
    };

    addToCart({ formData });
    updateCart(productId, quantity);
  };

  return (
    <div className={`cart-toast__product-recommendations`}>
      <h4 className={`cart-toast__product-recommendations-heading`}>
        {productRecommendations.length ? 'You May Also Like 🎉' : null}
      </h4>
      <ul className={`cart-toast__product-recommendations-list`}>
        {productRecommendations.map((product) => (
          <li key={product.id} className={`cart-toast__product-recommendation-item`}>
            <figure className={`cart-toast__product-recommendation-figure`}>
              <img
                className={`cart-toast__product-recommendation-img`}
                src={product.featured_image}
                width="50px"
                height="50px"
              />
              <figcaption>
                <h5>
                  <a href={product.url}>{product.title}</a>
                </h5>
                <p className={`cart-toast__product-recommendation-price`}>{formatPrice(product.price)}</p>
                <button
                  className={`cart-toast__product-recommendation-add-btn`}
                  onClick={() => handleAddToCart(product.variants[0].id, 1)}
                >
                  Add To Cart
                </button>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};
