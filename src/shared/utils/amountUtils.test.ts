import { formatAmount } from './amountUtils';

describe('Utils - amountUtils', () => {
  //   Tests that the function returns the correct formatted string for valid inputs.
  it('test_valid_inputs', () => {
    expect(formatAmount(1000, 'USD', 2)).toBe('$10.00');
    expect(formatAmount(123456789, 'EUR', 3)).toBe('€123,456.789');
    expect(formatAmount(0.99, 'GBP', 1)).toBe('£0.1');
  });

  // Tests that the function returns a whole number output when numDecimalsIncluded is 0.
  it('test_whole_number', () => {
    expect(formatAmount(500, 'JPY', 0)).toBe('¥500');
    expect(formatAmount(10000, 'KRW', 0)).toBe('₩10,000');
  });

  // Tests that the function returns an error or undefined for invalid inputs such as null or undefined number, invalid currency, negative or greater than 20 numDecimalsIncluded.
  it('test_invalid_inputs', () => {
    expect(() => formatAmount(100, 'invalidCurrency', 2)).toThrow();
    expect(() => formatAmount(100, 'USD', -1)).toThrow();
    expect(() => formatAmount(100, 'USD', 21)).toThrow();
  });

  // Tests that the function correctly formats negative numbers.
  it('test_negative_number', () => {
    expect(formatAmount(-100, 'USD', 2)).toBe('-$1.00');
    expect(formatAmount(-123456789, 'EUR', 3)).toBe('-€123,456.789');
  });

  // Tests that the function correctly rounds the number to the correct number of decimal places.
  it('test_rounding', () => {
    expect(formatAmount(123.456, 'USD', 2)).toBe('$1.23');
  });
});
