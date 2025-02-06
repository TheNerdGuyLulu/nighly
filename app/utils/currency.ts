export function priceWithCurrencySymbol({
  price,
  currency,
}: Pick<Nightly.Hotel, 'price' | 'currency'>) {
  const formatted = {
    EUR: `${price}€`,
    USD: `$${price}`,
  };

  return formatted[currency] ?? price;
}
