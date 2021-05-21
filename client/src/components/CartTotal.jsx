import React from 'react';
import { Link } from 'react-router-dom';
import './CartTotal.css'

const CartTotal = ({ products }) => {
    const total = products.reduce((acc, product) => acc + product.price * Number(product.quantity), 0);

    return (
        <div>
            <div>Total: { `${total}` }</div>
            <Link className='CartTotalCheckOut' to='/checkout' >Go to Checkout</Link>
        </div>
    );
};

export default CartTotal;
