import React, { Component } from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { ProductConsumer } from "../context";
import btn from '../shopBtn.png';


export default class Product extends Component {
    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                        <div 
                        className="img-container p-5" 
                    onClick={() =>  
                    value.handleDetail(id)}
                >
                    <Link to="/details"> 
                        <img src={img} alt="product" className="card-img-top" />
                    </Link>
                    <button className="cart-btn"
                     disabled={inCart ? true : false}
                      onClick={()=>{
                        value.addToCart(id);
                        //value.openModal(id);
                }}
                >
                     {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                        {" "}
                        in cart
                        </p>
                        ):(
                            <img src={btn} alt="store" className="fas fa-cart-plus" />
                        )}
                    </button>
                     </div>)}

                    
                    

                     </ProductConsumer>

                     {/* card footer */}
                     <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}

                        </h5>

                     </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.img-container {
    position: relative;
    overflow: hidden;
}
.card-img-top {
    transition: all 1s linear;
}
.img-container:hover .card-img-top {
    transform: scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn {
        transform: translate(0, 0);
}
.cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
}
`


// background: var(--lightBlue);