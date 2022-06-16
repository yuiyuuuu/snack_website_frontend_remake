import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Typography, CardMedia } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleSnack } from '../../../store/singleSnack';

const SingleSnacks = (props) => {
  const snackId = props.match.params.snackId;
  const { singleSnack } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleSnack(snackId));
  }, []);

  const [snackCount, setSnackCount] = useState(1);

  const { name, desc, price, quantity, photoURL } = singleSnack;
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          borderRadius: '15px',
          padding: '10px',
          margin: '80px 5px 5px 5px',
          flex: '0 1 300px',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200, objectFit: 'contain' }}
          image={photoURL}
        />
      </div>
      <div
        style={{
          borderRadius: '15px',
          padding: '10px',
          margin: '80px 5px 5px 5px',
          flex: '0 1 500px',
        }}
      >
        <div>
          <Typography variant="h4" color="text.primary" component="div">
            {name}
          </Typography>
          <Typography variant="h4" color="text.primary">
            {price}
          </Typography>
          <Typography variant="h5" color="text.primary">
            In Stock: {quantity}
          </Typography>
        </div>

        <hr></hr>
        <div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <ButtonGroup
                style={{ border: '2px solid black' }}
                color="secondary"
                variant="h6"
                aria-label="outlined secondary button group"
              >
                <Button onClick={() => setSnackCount(snackCount - 1)}>-</Button>
                <Typography
                  style={{ alignContent: 'center' }}
                  variant="h6"
                  color="text.primary"
                >
                  {snackCount}
                </Typography>
                <Button onClick={() => setSnackCount(snackCount + 1)}>+</Button>
              </ButtonGroup>
            </div>
            <div>
              <Button color="primary">Add to Cart</Button>
            </div>
          </div>
        </div>

        <hr></hr>
        <div>
          <Typography variant="subtitle">Description: {desc}</Typography>
        </div>
      </div>
    </div>
  );
};

export default SingleSnacks;
