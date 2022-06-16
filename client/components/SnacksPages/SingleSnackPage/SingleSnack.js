import React, { useState } from 'react';
import { Button, ButtonGroup, Typography } from '@material-ui/core';

const SingleSnacks = (props) => {
  console.log('Snack Id from URL', props.match.params.snackId);
  const [snackCount, setSnackCount] = useState(1);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        border: '2px solid blue',
        height: '100vh',
      }}
    >
      <div
        style={{
          border: '2px solid red',
          borderRadius: '15px',
          padding: '10px',
          margin: '80px 5px 5px 5px',
          flex: '0 1 300px',
        }}
      >
        <img src="https://target.scene7.com/is/image/Target/GUEST_270b5c8e-cb10-4635-8c6b-a2d4ae94102a?wid=325&hei=325&qlt=80&fmt=pjpeg" />
      </div>
      <div
        style={{
          border: '2px solid red',
          borderRadius: '15px',
          padding: '10px',
          margin: '80px 5px 5px 5px',
          flex: '0 1 500px',
        }}
      >
        <div>
          <Typography variant="h1">Title</Typography>
          <Typography variant="h2">Price</Typography>
        </div>
        <hr></hr>
        <div>
          <Typography variant="h3">Quantity:{snackCount}</Typography>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <ButtonGroup
                color="secondary"
                aria-label="outlined secondary button group"
              >
                <Button onClick={() => setSnackCount(snackCount - 1)}>-</Button>
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
          <Typography variant="h3">Description:</Typography>
        </div>
        <div>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton>
            <Remove />
          </IconButton>
          Qty : 1
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <RemoveShoppingCart />
          </IconButton>
        </Box> */}
        </div>

        {/* <div>



          <Typography variant="p">Right</Typography>
          <Typography variant="p">to your</Typography>
          <Typography variant="p">door.</Typography>
          <div>
            <Button>Shop Now</Button>
          </div>
          <div />
        </div> */}
      </div>
    </div>
  );
};

export default SingleSnacks;
