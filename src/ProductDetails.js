import React from "react"
import { useState } from "react";
import {useParams} from "react-router-dom"
import products from "./db/data";
import CartAmountToggle from "./components/CartAmountToggle";

function ProductDetails() {
const {productId} = useParams()
const thisProduct = products.find(prod => prod.id === productId)
const [amount, setAmount] = useState(1); 

const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < 0 ? setAmount(amount + 1) : setAmount(amount + 1);
  };

return (
    <section className="container">  
        <div className="row">
            <div className="col-lg-6">
              <img src={thisProduct.img} alt={thisProduct.title} className="card-img" />
            </div>
            <div className="col-lg-6 product-details">
                <h6 className="theme-color">{thisProduct.company}</h6>
                <h2>{thisProduct.title}</h2>
                <p>{thisProduct.description}</p>
                <div className="display-flex"><del>{thisProduct.prevPrice} </del> <h5><span className="theme-color">{thisProduct.newPrice}</span></h5></div>
                {/* Quentity dropdown  */}
                <CartAmountToggle
                    amount={amount}
                    setDecrease={setDecrease}
                    setIncrease={setIncrease}
                /> 
                <button className="product-buy-now-btn">Buy Now</button>
            </div>
        </div>
    </section>
)
}

export default ProductDetails