import React from "react";
import { CardContent, Typography } from "@material-ui/core";
const Servicecard = (props) => {
  return (
    <>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>

        <Typography variant="body2">{props.desc}</Typography>
      </CardContent>
    </>
  );
};

export default Servicecard;
