import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleSnack } from "../../../store/singleSnack";

import "./SingleSnack.css";

const SingleSnack = (props) => {
  const dispatch = useDispatch();
  const snackId = props.match.params.snackId;

  const [counter, setCounter] = useState(1);

  const snack = useSelector((state) => state.singleSnack);

  useEffect(() => {
    dispatch(fetchSingleSnack(snackId));
  }, []);
  console.log(snack);
  return (
    <div className='single-snack-container'>
      <div className='single-snack-flex-container'>
        <Link to='/allsnacks'>
          <div
            style={{
              height: "50px",
              display: "flex",
              flexDirection: "column-reverse",
              textDecoration: "underline",
              color: "black",
            }}
          >
            Go back
          </div>
        </Link>
        <div className='single-snack-product-container'>
          <div className='product-image-div'>
            <img src={snack.photoURL} className='product-image' />
          </div>
          <div className='product-description-div'>
            <div className='product-name'>{snack.name}</div>
            <div
              style={{ fontWeight: "600", marginTop: "10px", fontSize: "18px" }}
            >
              ${snack.price}
            </div>
            <div style={{ marginTop: "10px" }}>{snack.desc}</div>
            <div style={{ flexGrow: 1 }} />
            <div className='atc-quantity-div'>
              <div
                className='add-sub'
                style={{ pointerEvents: counter === 1 ? "none" : "auto" }}
                onClick={() => setCounter(counter - 1)}
              >
                -
              </div>
              <div>{counter}</div>
              <div
                className='add-sub'
                style={{ fontSize: "22px" }}
                onClick={() => setCounter(counter + 1)}
              >
                +
              </div>

              <div className='atcbut'>Add to bag</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSnack;
