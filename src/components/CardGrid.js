import React from "react"; 
import { Link } from "react-router-dom";

const CardGrid = ({ img, title, prevPrice, newPrice, id }) => { 
  return (
    <>
        <div className="col-lg-4 mb-4">
        <div className="card-box">
            <img src={img} alt={title} className="card-img" />
            <div className="card-details">            
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

export default CardGrid;
