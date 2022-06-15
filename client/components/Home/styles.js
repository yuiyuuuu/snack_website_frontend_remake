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
  },
  home: {
    height: "50%",
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
    width: "700px",
  },
  media: {
    width: "100%",
  },
  buttonDiv: {
    display: "flex",
    marginBottom: "20px",
  },
  shopButton: {
    marginTop: "30px",
    borderRadius: "30px !important", //need !important to round button or else another class is overtaking it
    backgroundColor: "white",
    position: "relative",
    left: "37%",
  },
  "@media (min-width: 960px)": {},
}));
