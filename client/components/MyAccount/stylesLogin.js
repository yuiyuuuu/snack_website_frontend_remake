import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    alignItems: "center",
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },

  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "deepskyblue",
    fontWeight: "bolder",
    color: "white",
  },
  buttonNoComplete: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "gainsboro",
    color: "gray",
    fontWeight: "bolder",
  },
}));
