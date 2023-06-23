export const priceFormatter = (numberArg) => {
  return Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(numberArg / 100);
};
