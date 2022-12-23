import React, { useState } from "react";
import { Currencies } from "../../libs/types";
import { CurrencyInputContainer } from "./CurrencyInputContainer/CurrencyInputContainer";
import { useStyles } from "./styles";

interface Props {
  currencies: Currencies;
}

export const CurrencyConverter = ({ currencies }: Props) => {
  const classes = useStyles();
  const [firstCurrencyName, setFirstCurrency] = useState<string>("USD");
  const [secondCurrencyName, setSecondCurrency] = useState<string>("UAH");
  const [firstCurrencyValue, setFirstCurrencyValue] = useState<number>(1);
  const [secondCurrencyValue, setSecondCurrencyValue] = useState<number>(
    1 / currencies[firstCurrencyName as keyof typeof currencies]
  );

  const calculateCurrencyValue = (
    currencyName: string,
    currencyConvertName: string,
    value: number
  ): number => {
    const firstValue = currencies[currencyName as keyof typeof currencies];
    const secondValue =
      currencies[currencyConvertName as keyof typeof currencies];
      console.log(currencyName, currencyConvertName);
      
    return (1 / firstValue / (1 / secondValue)) * value;
  };

  const handleSetFirstName = (name: string) => {
    setFirstCurrency(name);
    if (name === secondCurrencyName) {
      setSecondCurrency(firstCurrencyName);
      setSecondCurrencyValue(
        calculateCurrencyValue(name, firstCurrencyName, firstCurrencyValue)
      );
    } else {
      setSecondCurrencyValue(
        calculateCurrencyValue(name, secondCurrencyName, firstCurrencyValue)
      );
    }
  };

  const handleSetSecondName = (name: string) => {
    setSecondCurrency(name);
    if (name === firstCurrencyName) {
      setFirstCurrency(secondCurrencyName);
      setFirstCurrencyValue(
        calculateCurrencyValue(name, secondCurrencyName, secondCurrencyValue)
      );
    } else
      setFirstCurrencyValue(
        calculateCurrencyValue(name, firstCurrencyName, secondCurrencyValue)
      );
  };

  const handleSetFirstValue = (value: number) => {
    setFirstCurrencyValue(value);
    setSecondCurrencyValue(
      calculateCurrencyValue(firstCurrencyName, secondCurrencyName, value)
    );
  };

  const handleSetSecondValue = (value: number) => {
    setSecondCurrencyValue(value);
    setFirstCurrencyValue(
      calculateCurrencyValue(secondCurrencyName, firstCurrencyName, value)
    );
  };

  return (
    <div className={classes.body}>
      <CurrencyInputContainer
        currencyName={firstCurrencyName}
        currencyValue={firstCurrencyValue}
        setCurrencyName={handleSetFirstName}
        setCurrencyValue={handleSetFirstValue}
        key="first"
      />
      <CurrencyInputContainer
        currencyName={secondCurrencyName}
        currencyValue={secondCurrencyValue}
        setCurrencyName={handleSetSecondName}
        setCurrencyValue={handleSetSecondValue}
        key="second"
      />
    </div>
  );
};
