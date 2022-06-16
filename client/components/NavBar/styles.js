import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  "@media screen and (max-width:300px)": {
    storeName: {
      display: "none",
    },
  },
  badge: {
    backgroundColor: "deepskyblue",
  },
}));
