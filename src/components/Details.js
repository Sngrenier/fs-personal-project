import React, { Component } from "react";
import { ProductConsumer } from "../context/context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./NavButton";

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            item_id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          console.log("detProd", value.detailProduct);
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h3> {title}</h3>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    craftmanship details:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/productList">
                      <ButtonContainer>to collection</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      // disabled={inCart?true:false}
                      onClick={() => {
                        value.addToCart(item_id);
                        value.openModal(item_id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
export default Details;
