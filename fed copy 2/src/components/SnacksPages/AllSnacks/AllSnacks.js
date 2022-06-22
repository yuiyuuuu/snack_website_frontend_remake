import React, { useEffect, useState } from "react";
import useStyles from "./AllSnackStyles";
import { Container, Typography, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/Snacks";
import SingleSnackComponent from "./SingleSnackComponent";
import FilterImg from "./FilterImg";
import { Box, Button } from "@mui/material";

const AllSnacks = () => {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const classes = useStyles();
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [flavor, setFlavor] = useState("All");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const randomListProducts = shuffle(products);
  const saltyProducts = products.filter(
    (product) => product.productCategoryId === 1
  );
  const sweetProducts = products.filter(
    (product) => product.productCategoryId === 2
  );
  const healthyProducts = products.filter(
    (product) => product.productCategoryId === 3
  );
  const frozenProducts = products.filter(
    (product) => product.productCategoryId === 4
  );

  return (
    <div>
      <div>
        <main className={classes.root}>
          <div className={classes.toolbar} />
          <Grid container justifyContent='flex-start' spacing={4}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() => {
                setFlavor("Salty");
              }}
            >
              <FilterImg
                flavor={"Salty"}
                img={
                  "https://m.media-amazon.com/images/I/41DzPGQXiuL._AC_SY350_.jpg"
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() => {
                setFlavor("Sweet");
              }}
            >
              <FilterImg
                flavor={"Sweet"}
                img={
                  "https://www.sweetflavorfl.com/img/my-sweet-flavor-logo-1618319663.jpg"
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() => {
                setFlavor("Healthy");
              }}
            >
              <FilterImg
                flavor={"Healthy"}
                img={
                  "https://styles.redditmedia.com/t5_2scbp/styles/communityIcon_8pqszfejizl61.png"
                }
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              onClick={() => {
                setFlavor("Refrigerated && Frozen");
              }}
            >
              <FilterImg
                flavor={"Refrigerated && Frozen"}
                img={
                  "https://cdn.shopify.com/s/files/1/0294/2825/2771/collections/Category-Bars-Intro.png?v=1654034576"
                }
              />
            </Grid>
          </Grid>
        </main>
      </div>
      <Box textAlign='center'>
        <Button
          sx={{ width: 1000, height: 200, fontSize: 60 }}
          color='secondary'
          onClick={() => setFlavor("All")}
        >
          BROWSE ALL OF OUR SNACKS!
        </Button>
      </Box>
      <div>
        <main className={classes.root}>
          <div className={classes.toolbar} />
          <Grid container justifyContent='flex-start' spacing={3}>
            {flavor === "Salty"
              ? saltyProducts.map((product) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <SingleSnackComponent snack={product} />
                    </Grid>
                  );
                })
              : flavor === "Sweet"
              ? sweetProducts.map((product) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <SingleSnackComponent snack={product} />
                    </Grid>
                  );
                })
              : flavor === "Healthy"
              ? healthyProducts.map((product) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <SingleSnackComponent snack={product} />
                    </Grid>
                  );
                })
              : flavor === "Refrigerated && Frozen"
              ? frozenProducts.map((product) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <SingleSnackComponent snack={product} />
                    </Grid>
                  );
                })
              : randomListProducts.map((product) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <SingleSnackComponent snack={product} />
                    </Grid>
                  );
                })}
          </Grid>
        </main>
      </div>
    </div>
  );
};

export default AllSnacks;
