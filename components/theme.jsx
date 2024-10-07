import { createTheme } from "@mui/material";
import React from "react";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00B389",
    },
    secondary: {
      main: "#196B52",
    },
    text: {
      disabled: "#FF9F94",
      hint: "#B0DAF2",
      primary: "#404944",
      secondary: "#707974",
    },
    divider: "#707974",
  },
  typography: {
    h6: {
      fontWeight: 600,
    },
  },
});
