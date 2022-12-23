import React from "react";
import { getCurrencyPrice } from "../libs/helper";
import { Currencies } from "../libs/types";
import { useStyles } from "./styles";

interface Props {
  currencies: Currencies;
}

const Header = ({ currencies }: Props) => {
  const classes = useStyles();
  const shouldShowCurr = (item: string, price: number) => {
    return item !== "UAH" && price;
  };
  return (
    <div className={classes.header}>
      {Object.keys(currencies).map((item) => {
        const price = currencies[item as keyof Currencies]
        return (
          shouldShowCurr(item, price) && (
            <div>
              {item}: {getCurrencyPrice(price)}
              &#8372;
            </div>
          )
        );
      })}
    </div>
  );
};

export default Header;
