import { initialState } from "./constants";
import { Currencies } from "./types";

export const parseCurrencies = (currencies: { [key: string]: number }) => {
  let parsedCurrencies: { [key: string]: number } = {};
  Object.keys(currencies).map((item: string) => {
    if (initialState.currencies[item as keyof Currencies] !== undefined) {
      parsedCurrencies = { ...parsedCurrencies, [item]: currencies[item] };
    }
  });
  return parsedCurrencies;
};

export const getCurrencyPrice = (price: number) => {
  return (1 / price).toFixed(2);
};
