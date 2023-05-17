export const intlAmount = new Intl.NumberFormat(navigator.language, {
  style: 'currency',
  currency: 'USD',
});

export const formatAmount = (number: number, currency: string, numDecimalsIncluded: number) => {
  const num = number / 10 ** numDecimalsIncluded;
  console.log('🚀 ~ file: amountUtils.ts:8 ~ formatAmount ~ number:', number);
  console.log('🚀 ~ file: amountUtils.ts:8 ~ formatAmount ~ numDecimalsIncluded:', numDecimalsIncluded);
  console.log('🚀 ~ file: amountUtils.ts:8 ~ formatAmount ~ num:', num);
  return new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: numDecimalsIncluded, // force two decimal places
  }).format(num);
};
