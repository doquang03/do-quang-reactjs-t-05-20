import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addProductToCart } from "./ProductItem.action";
import { createTheme } from "react-dark-theme";

function ProductItem(props) {
  // const onAddToCart = () => {
  //   return props.addProductInCart(props);
  // };
  const lightTheme = {
    background: "white",
    color: "black",
  };

  const darkTheme = {
    background: "black",
    color: "white",
  };
  const myTheme = createTheme(darkTheme, lightTheme);

  return (
    <>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="product-wrapper mb-50">
          <div className="product-img mb-25">
            <a href="#">
              <img src={props.imgUrl} alt />
            </a>
            <div className="product-action text-center">
              <a title="Shoppingb Cart">
                <i
                  className="fas fa-shopping-cart"
                  onClick={() => {
                    props.addProductInCart(props);
                  }}
                />
              </a>
              <Link to={`/product-detail/${props.id}`} title="Quick View">
                <i className="fas fa-search" />
              </Link>
            </div>
          </div>
          <div className="product-content pr-0">
            <div className="pro-cat mb-10">
              <a href="#">{props.type}</a>
            </div>
            <h4>
              <span
                className="shopInfor_shopName"
                style={{ color: myTheme.color }}
                href="#"
              >
                {props.shopName}
              </span>
              <br />
              <a href="#" style={{ color: myTheme.color }}>
                {props.name}
              </a>
            </h4>
            <div className="product-meta">
              <div className="pro-price">
                <span>{props.finalPrice}</span>
                <span className="old-price">{props.finalPriceMax}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = {
  addProductInCart: addProductToCart,
};
export default connect(null, mapDispatchToProps)(ProductItem);
