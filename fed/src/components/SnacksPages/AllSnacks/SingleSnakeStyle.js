import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
  },
  root: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  media: {
    height: "100%",
    padding: theme.spacing(3),
    paddingLeft: "60.25%",
    paddingTop: "58.25%",
    width: "100%",
  },
  name: {
    fontWeight: "bolder",
  },
}));
