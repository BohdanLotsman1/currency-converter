import React, { ChangeEvent, memo, useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "../styles";

interface Props {
  currencyValue: number;
  setCurrencyValue: (currency: number) => void;
}

export const CurrencyInput = memo(
  ({ currencyValue, setCurrencyValue }: Props) => {
    const [inputValue, setInputValue] = useState<number | string>(
      currencyValue
    );
    const classes = useStyles();

    useEffect(() => {
      const digitsCount = String(currencyValue).split(".")[1]?.length >= 2;
      const fixedValue = Number.isInteger(currencyValue)
        ? currencyValue
        : currencyValue.toFixed(digitsCount ? 2 : 1);

      setInputValue(fixedValue);
    }, [currencyValue]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.target.value;
      const successCondition =
        (e.target.validity.valid || value[value.length - 1] === ".") &&
        value.length <= 10;
      if (successCondition) {
        setInputValue(value);
        console.log(value || "0", parseFloat(e.target.value ?? "0"));

        setCurrencyValue(parseFloat(value || "0"));
      }
    };

    return (
      <TextField
        variant="outlined"
        inputProps={{
          type: "text",
          inputMode: "numeric",
          pattern: "[0-9]+(.[0-9][0-9]?)?",
        }}
        classes={{ root: classes.input }}
        value={inputValue}
        onChange={handleChange}
      />
    );
  }
);
