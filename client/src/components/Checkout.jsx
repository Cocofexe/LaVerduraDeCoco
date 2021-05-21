import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Checkout.css'
import { payProducts, getCart } from '../app/actions';

const Checkout = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.cart);

    useEffect(() => dispatch(getCart()), [dispatch]);

    const handlePayProducts = () => dispatch(payProducts(productsInCart));
    
    return (
        <div>
            <h2>Checkout</h2>
            {
                productsInCart && productsInCart.map(({ id, name, price, quantity }) => (
                    <div key={id} >{name} ........................... {price * quantity}</div>
                ))
            }
            <button className='CheckoutPay' onClick={handlePayProducts} >Pay</button>
        </div>
    );
};

export default Checkout;
