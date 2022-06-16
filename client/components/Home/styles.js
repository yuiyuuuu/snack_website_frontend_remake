import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    display: "flex",
    paddingTop: theme.spacing(8),
    paddingLeft: 0,
    position: "absolute",
    left: 0,
    top: "-3px",
    flexWrap: "wrap",
    width: "100%",
  },
  m1: {
    height: "100%",
    padding: 0,
    backgroundColor: "aqua",
    width: "50%",
  },
  homeTitle: {
    paddingRight: "110px",
    fontFamily: "Ultra",
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "700",
    color: "black",
    marginLeft: "100px",
    marginBottom: "-20px",
  },
  imageDiv: {
    height: "50%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  media: {
    width: "100%",
    height: "50%",
  },
  buttonDiv: {
    display: "flex",
    marginBottom: "40px",
  },
  shopButton: {
    marginTop: "30px",
    borderRadius: "30px !important", //need !important to round button or else another class is overtaking it
    backgroundColor: "white",
    position: "relative",
    left: "35%",
  },
  m2: {
    display: "flex",
    justifyContent: "center",
  },
}));
