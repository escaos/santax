// amountUtils.test.ts
import { formatAmount } from './amountUtils';

describe('Utils - amountUtils', () => {
  it('returns the correct formatted string for valid inputs', () => {
    expect(formatAmount(1000, 'USD', 2)).toBe('$10.00');
    expect(formatAmount(123456789, 'EUR', 3)).toBe('€123,456.789');
    expect(formatAmount(0.99, 'GBP', 1)).toBe('£0.1');
  });

  it('returns a whole number output when numDecimalsIncluded is 0', () => {
    expect(formatAmount(500, 'JPY', 0)).toBe('¥500');
    expect(formatAmount(10000, 'KRW', 0)).toBe('₩10,000');
  });

  it('returns an error or undefined for invalid inputs', () => {
    expect(() => formatAmount(100, 'invalidCurrency', 2)).toThrow();
    expect(() => formatAmount(100, 'USD', -1)).toThrow();
    expect(() => formatAmount(100, 'USD', 21)).toThrow();
  });

  it('correctly formats negative numbers', () => {
    expect(formatAmount(-100, 'USD', 2)).toBe('-$1.00');
    expect(formatAmount(-123456789, 'EUR', 3)).toBe('-€123,456.789');
  });

  it('correctly rounds the number to the correct number of decimal places', () => {
    expect(formatAmount(123.456, 'USD', 2)).toBe('$1.23');
  });
});
