import { priceWithCurrencySymbol } from 'app/utils/currency.ts';

describe('utils/currency', () => {
  it('should format price in EUR', () => {
    expect(priceWithCurrencySymbol({ price: 200, currency: 'EUR' })).toEqual(
      '200€',
    );
  });

  it('should format price in USD', () => {
    expect(priceWithCurrencySymbol({ price: 200, currency: 'USD' })).toEqual(
      '$200',
    );
  });

  it('should return only price if currency is unexpected', () => {
    // @ts-expect-error
    expect(priceWithCurrencySymbol({ price: 200, currency: 'PLN' })).toEqual(
      200,
    );
  });
});
