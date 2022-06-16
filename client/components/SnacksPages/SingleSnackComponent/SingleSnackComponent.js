import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
const image =
  "https://www.cheetos.com/sites/cheetos.com/files/2019-03/Cheetos%20Crunchy_v2_0.png";

const SingleSnackComponent = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />

      <CardContent>
        <div className={classes.content}>
          <Typography className={classes.name} variant="title">
            Cheetos 14.05 oz{" "}
          </Typography>
        </div>
        <div>
          <Typography>Cheetos are amazing</Typography>
        </div>
        <Typography>$20</Typography>
      </CardContent>
    </Card>
  );
};

export default SingleSnackComponent;
