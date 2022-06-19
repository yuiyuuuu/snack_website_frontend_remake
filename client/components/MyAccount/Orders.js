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
  const [flavor, setFlavor] = useState('All');
  console.log(orders);

  useEffect(() => {
    dispatch(fetchOrders(user.id));
  }, [user.id]);

  return (
    <Container maxWidth='sm'>
      {/* map through orders based on user id */}
      {orders.map((order) => (
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {`ORDER #${order.id}`}
          </AccordionSummary>
          <AccordionDetails>the order details</AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
