import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import {
  Container,
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
          </AccordionSummary>
          {order.order_items.map((item) => (
            <AccordionDetails key={item.id}>
              {`(${item.quantity}) ${item.product.name}`}
            </AccordionDetails>
          ))}
          <AccordionDetails
            sx={{ justifyContent: 'end' }}
          >{`TOTAL: ${order.total}`}</AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
