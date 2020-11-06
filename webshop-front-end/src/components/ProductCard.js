import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../store/basket/actions";

const ProductCard = (props) => {
  const dispatch = useDispatch();
  function buttonClickedHandler(id) {
    dispatch(addToBasket(id));
  }

  console.log("props.photo:", props.photo);
  return (
    <div style={{ display: "inline-block", alignItems: "center" }}>
      <div className="card" style={{ width: "20rem", margin: "20px 20px" }}>
        <div className="card-body">
          <h4 className="card-title">{`${props.name}`}</h4>
        </div>

        <div>
          <img
            className="card-img-top"
            src={props.photo}
            alt=" beerImage"
            maxHeight="100em"
          />
        </div>
        <div>
          <p>€{props.price / 100}</p>
        </div>
      </div>
      <button onClick={() => buttonClickedHandler(props.id)}>
        Add to basket{" "}
      </button>
    </div>
  );
};

export default ProductCard;
