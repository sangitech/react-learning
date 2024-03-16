import React from "react";   
import { Link } from "react-router-dom";

const CardList = ({ img, title, star, reviews, prevPrice, newPrice, id }) => { 
  return (
    <>
        <div className="col-lg-12 mb-4">
        <div className="row card-box align-items-center">
            <div className="col-lg-6">
            <img src={img} alt={title} className="card-img" />
            </div>
            <div className="card-details col-lg-6">
              <h4 className="card-title"><Link to={`/products/${id}`}>{title}</Link> </h4>
              <div className="card-price">
                <div className="price">
                  <del>{prevPrice}</del> {newPrice}
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  ); 
};

export default CardList;
