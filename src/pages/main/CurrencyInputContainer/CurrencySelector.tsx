import React, { ChangeEvent, memo } from "react";
import { Select, MenuItem } from "@material-ui/core";
import { CurrencyNames } from "../../../libs/enums";
import { useStyles } from "../styles";

interface Props {
  currencyName: string;
  setCurrencyName: (currency: string) => void;
}

export const CurrencySelector = memo(({ currencyName, setCurrencyName }: Props) => {
  const classes = useStyles();

  const handleSelect = (
    e: ChangeEvent<{ name?: string | undefined; value: any }>
  ) => {
    setCurrencyName(e.target.value as string);
  };

  return (
    <Select
      value={currencyName}
      className={classes.select}
      variant="outlined"
      onChange={handleSelect}
    >
      {Object.keys(CurrencyNames).map((item: string) => (
        <MenuItem value={item}>
          {CurrencyNames[item as keyof typeof CurrencyNames]}
        </MenuItem>
      ))}
    </Select>
  );
});
