import { Button } from "@mui/material";
import React from "react";

export default function Formbtn(props) {
  const { btntxt, ...rest } = props;

  return (
    <Button variant="contained" size="large" {...rest}>
      {btntxt}
    </Button>
  );
}
