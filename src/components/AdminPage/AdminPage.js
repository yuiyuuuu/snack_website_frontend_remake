import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "./AdminPageStyle";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Box,
} from "@mui/material";
import { Container, Typography, Grid } from "@material-ui/core";
import { fetchAllUsers } from "../../store";
import AdminPageProductCreateForm from "./AdminPageProductCreateForm";
import AdminPageUserEditForm from "./AdminPageUserEditForm";
import { _updateAdminUser } from "../../store";
import { fetchProducts } from "../../store/Snacks";
import AdminSingleSnack from "./AdminSingleSnack";
import FilterImg from "../SnacksPages/AllSnacks/FilterImg";

const columns = [
  { id: "id", label: "ID", minWidth: 30, align: "center" },
  { id: "firstName", label: "First name", minWidth: 100, align: "center" },
  { id: "lastName", label: "Last name", minWidth: 100, align: "center" },
  {
    id: "isAdmin",
    label: "isAdmin",
    minWidth: 50,
    align: "center",
  },
  {
    id: "email",
    label: "Email",
    minWidth: 150,
    align: "center",
  },
  {
    id: "address_line1",
    label: "Address Line 1",
    minWidth: 480,
    align: "center",
  },
  {
    id: "address_line2",
    label: "Address Line 2",
    minWidth: 170,
    align: "center",
  },
  {
    id: "city",
    label: "City",
    minWidth: 100,
    align: "center",
  },
  {
    id: "postal_code",
    label: "Postal Code",
    minWidth: 100,
    align: "center",
  },
  {
    id: "country",
    label: "Country",
    minWidth: 100,
    align: "center",
  },
  {
    id: "telephone",
    label: "Telephone",
    minWidth: 170,
    align: "center",
  },
  {
    id: "createdAt",
    label: "CreatedAt",
    minWidth: 170,
    align: "center",
  },
  {
    id: "edit",
    label: "EDIT",
    minWidth: 30,
    align: "center",
  },
];

const AdminPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //for users page
  const [menu, setMenu] = useState("users");
  const { users } = useSelector((state) => state);
  users.sort();
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  //for products page
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const [flavor, setFlavor] = useState("All");
  const { products } = useSelector((state) => state);
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

  const handleToggle = (id) => {
    dispatch(_updateAdminUser(id));
    history.push("/adminpage");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Box textAlign='center'>
            <Button
              variant='contained'
              sx={{ margin: "15px" }}
              onClick={() => {
                setMenu("users");
              }}
            >
              Users
            </Button>
            <Button
              variant='contained'
              sx={{ margin: "15px" }}
              onClick={() => {
                setMenu("products");
              }}
            >
              Products
            </Button>
          </Box>
          {menu === "users" ? (
            <Paper sx={{ width: "100%", align: "center", overflow: "auto" }}>
              <TableContainer sx={{ maxHeight: 600 }}>
                <TableContainer stickyHeader aria-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role='checkbox'
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.id === "edit" ? (
                                    <AdminPageUserEditForm user={row} />
                                  ) : column.id !== "isAdmin" ? (
                                    value
                                  ) : value ? (
                                    <button
                                      onClick={() => {
                                        handleToggle(row.id);
                                      }}
                                    >
                                      true
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => {
                                        handleToggle(row.id);
                                      }}
                                    >
                                      false
                                    </button>
                                  )}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </TableContainer>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          ) : (
            <div>
              <div>
                <main className={classes.root}>
                  <div className={classes.toolbar} />
                  <Grid container justifyContent='flex-start' spacing={5}>
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
              <Box textAlign='center'>
                <AdminPageProductCreateForm />
              </Box>
              <div>
                <main className={classes.root}>
                  <div className={classes.toolbar} />
                  <Grid container justifyContent='flex-start' spacing={4}>
                    {flavor === "Salty"
                      ? saltyProducts.map((product) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={4}
                              lg={3}
                              key={product.id}
                            >
                              <AdminSingleSnack snack={product} />
                            </Grid>
                          );
                        })
                      : flavor === "Sweet"
                      ? sweetProducts.map((product) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={4}
                              lg={3}
                              key={product.id}
                            >
                              <AdminSingleSnack snack={product} />
                            </Grid>
                          );
                        })
                      : flavor === "Healthy"
                      ? healthyProducts.map((product) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={4}
                              lg={3}
                              key={product.id}
                            >
                              <AdminSingleSnack snack={product} />
                            </Grid>
                          );
                        })
                      : flavor === "Refrigerated && Frozen"
                      ? frozenProducts.map((product) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={4}
                              lg={3}
                              key={product.id}
                            >
                              <AdminSingleSnack snack={product} />
                            </Grid>
                          );
                        })
                      : randomListProducts.map((product) => {
                          return (
                            <Grid
                              item
                              xs={12}
                              sm={6}
                              md={4}
                              lg={3}
                              key={product.id}
                            >
                              <AdminSingleSnack snack={product} />
                            </Grid>
                          );
                        })}
                  </Grid>
                </main>
              </div>
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default AdminPage;
