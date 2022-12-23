import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100% - 60px - 32px)",
    [theme.breakpoints.down(600)]: {
      height: "calc(100% - 40px - 32px)",
    },
  },
  inputContainer: {
    display: "flex",
    flexWrap: "nowrap",
    "&:first-child": {
      marginBottom: theme.spacing(2),
    },
  },
  select: {
    [theme.breakpoints.down(600)]: {
      fontSize: 18,
      width: 150,
    },
    background: "white",
    "&:focus": {
      background: "white",
      borderRadius: 4,
    },
    "& .MuiSelect-root": {
      fontSize: 37,
      width: 300,
      display: "flex",
      alignItems: "center",
    },
  },
  input: {
    '& .MuiInputBase-root': {
      width: 300,
      marginLeft: theme.spacing(2),
    },
    "& .MuiInputBase-input": {
      background: "white",
      borderRadius: 4,
      fontSize: 37,
      [theme.breakpoints.down(600)]: {
        fontSize: 18,
      },
    },
    [theme.breakpoints.down(600)]: {
      width: 200,
    },
  },
}));
