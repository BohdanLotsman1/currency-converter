export interface Currencies {
  USD: number;
  JPY: number;
  CZK: number;
  AUD: number;
  EUR: number;
  UAH: number;
  GBP: number;
}

export interface InitialState {
  currencies: Currencies;
  isUploaded: boolean;
}

export interface Action {
  payload?: any;
  type: string;
}