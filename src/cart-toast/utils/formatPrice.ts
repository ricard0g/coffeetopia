export const formatPrice = (priceInCents: number, currency = 'EUR') => {
  const euros = priceInCents / 100;
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: currency,
  }).format(euros);
};
