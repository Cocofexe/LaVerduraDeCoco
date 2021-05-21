import React from 'react';
import { Link } from 'react-router-dom';

const CartTotal = ({ products }) => {
    const total = products.reduce((acc, product) => acc + product.price * Number(product.quantity), 0);

    return (
        <div>
            <div>Total: { `${total}` }</div>
            <Link to='/checkout' >Go to Checkout</Link>
            {/* <button href='http://localhost:3000/checkout' ></button> */}
        </div>
    );
};

export default CartTotal;
