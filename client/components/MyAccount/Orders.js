import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import {
  Typography,
  Grid,
  TextField,
  Container,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fetchOrders } from '../../store';

export default function Orders() {
  const user = useSelector((state) => state.auth);
  const { orders } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(orders);
  // const firstOrder = orders[0];

  // const ordersArr = firstOrder ? firstOrder.order_items : [];
  // console.log('HERE ', ordersArr);

  useEffect(() => {
    dispatch(fetchOrders(user.id));
  }, [user.id]);

  return (
    <Container maxWidth='sm'>
      {/* map through orders based on user id */}
      {orders.map((order) => (
        <Accordion key={order.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {`ORDER #${order.id}`}
            {/* {`TOTAL: ${order.total}`} */}
          </AccordionSummary>
          {order.order_items.map((item) => (
            <AccordionDetails key={item.id}>
              NAME: {`${item.product.name}`}
              QUANTITY: {item.quantity}
            </AccordionDetails>
          ))}
        </Accordion>
      ))}
    </Container>
  );
}
