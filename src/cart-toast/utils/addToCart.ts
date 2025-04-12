interface AddToCartParams {
  formData: { items: Array<{ id: number; quantity: number }> };
}

export const addToCart = async ({ formData }: AddToCartParams) => {
  try {
    console.log('formdata', formData);
    const response = await fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Response:', response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Item added to cart:', data);
    return data;
  } catch (e) {
    console.error('Error adding to cart:', e);
  }
};
