import React, { useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SingleSnackComponent = ({ snack }) => {
  //   const dispatch = useDispatch();
  //   const userId = useSelector((state) => state.auth);
  //   const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     console.log("userid", userId);
  //     if (!userId) return "loading";
  //     dispatch(fetchAUser(userId.id)); //user with shopping id
  //   };
  //   fetchUser();
  // }, [userId]);

  // console.log(user);

  //   const atc = () => {
  //     const cartItem = {
  //       productId: snack.id,
  //       quantity: snack.quantity,
  //       shoppingSessionId: user.shopping_session.id,
  //     };
  //     dispatch(addToCart(cartItem));
  //   };

  return (
    <Link to={`/allsnacks/${snack.id}`}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "25px",
          margin: "20px",
          height: "80%",
        }}
      >
        <CardMedia
          component='img'
          sx={{ width: 200, objectFit: "contain" }}
          image={snack.photoURL}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component='div' variant='h6'>
              {snack.name}
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              {snack.cat.type}
            </Typography>
            <Typography component='div' variant='h6'>
              $$ : {snack.price}
            </Typography>
          </CardContent>
          <Box
            sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
          ></Box>
        </Box>
      </Card>
    </Link>
  );
};

export default SingleSnackComponent;
