import React, { memo } from "react";
import { useStyles } from "../styles";
import { CurrencySelector } from "./CurrencySelector";
import { CurrencyInput } from "./CurrencyInput";

interface Props {
  currencyName: string;
  currencyValue: number;
  setCurrencyName: (currency: string) => void;
  setCurrencyValue: (currency: number) => void;
}

export const CurrencyInputContainer = memo(
  ({
    currencyName,
    currencyValue,
    setCurrencyName,
    setCurrencyValue,
  }: Props) => {
   const classes = useStyles();

    return (
      <div className={classes.inputContainer}>
        <CurrencySelector currencyName={currencyName} setCurrencyName={setCurrencyName} />
        <CurrencyInput currencyValue={currencyValue} setCurrencyValue={setCurrencyValue}/>
      </div>
    );
  }
);
