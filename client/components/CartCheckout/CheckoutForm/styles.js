import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  root2: {
    marginTop: "20px",
    height: "75vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  columnCard: {
    display: "flex",
    flexDirection: "column",
    width: "500px",
  },
  leftCard: {
    height: "30%",
    width: "100%",
  },
  paymentCard: {
    height: "60%",
    width: "100%",
  },
  rightCard: {
    height: "100%",
    width: "100%",
  },
  topRight: {
    height: "90%",
    width: "100%",
  },
  bottomRight: {
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "black",
    alignContent: "center",
  },
  pos: {
    marginBottom: 12,
  },
  shippingInfo: {
    width: "100%",
    height: "70%",
  },

  //   stepper: {
  //     marginTop: "30px",
  //   },
  stepperDiv: {
    paddingTop: theme.spacing(10),
    marginLeft: "18%",
    marginRight: "18%",
  },
}));
