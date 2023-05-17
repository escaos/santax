export const intlAmount = new Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'USD',
});

export const formatAmount = (number: number, currency: string, numDecimalsIncluded: number) => {
  const num = number / 10 ** numDecimalsIncluded;

  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: currency ?? 'USD',
    minimumFractionDigits: numDecimalsIncluded, // force two decimal places
  }).format(num);
};
