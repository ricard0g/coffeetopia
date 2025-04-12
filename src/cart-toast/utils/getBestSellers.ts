import { Product } from '../types/products';

interface GetBestSellersParams {
  productId: number;
  intent: string;
}

export const getBestSellers = async ({ productId, intent }: GetBestSellersParams): Promise<Product[]> => {
  try {
    const response = await fetch(`/recommendations/products.json?product_id=${productId}&intent=${intent}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const bestSellers: Product[] = data.products.map((product: Product) => ({
      id: product.id,
      title: product.title,
      handle: product.handle,
      description: product.description,
      published_at: product.published_at,
      created_at: product.created_at,
      vendor: product.vendor,
      type: product.type,
      tags: product.tags,
      price: product.price,
      price_min: product.price_min,
      price_max: product.price_max,
      available: product.available,
      price_varies: product.price_varies,
      compare_at_price: product.compare_at_price,
      compare_at_price_min: product.compare_at_price_min,
      compare_at_price_max: product.compare_at_price_max,
      compare_at_price_varies: product.compare_at_price_varies,
      variants: product.variants,
      images: product.images,
      featured_image: product.featured_image,
      options: product.options,
      url: product.url,
    }));

    return bestSellers;
  } catch (e) {
    console.error('Error fetching best sellers:', e);
    return [];
  }
};

export const getProductId = async (): Promise<number> => {
  try {
    const response = await fetch('/products/coffee-vietnam.json');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const productId = data.product.id;

    return productId;
  } catch (e) {
    console.error('Error fetching best sellers by product ID:', e);
    return 0;
  }
};
