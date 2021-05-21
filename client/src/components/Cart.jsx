import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCart, deleteCart } from '../app/actions';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.cart);

    useEffect(() => dispatch(getCart()), [dispatch]);

    const handleDeleteCart = () => dispatch(deleteCart());

    return (
        <div>
            {
                productsInCart && productsInCart.length ?
                    <div>
                        <div>
                            {
                                productsInCart.map(product => <CartItem key={product.id} product={product} />)
                            }
                            <button onClick={handleDeleteCart} >Delete Cart</button>
                        </div>
                        <div>
                            <CartTotal products={productsInCart} />
                        </div>
                    </div>
                : <h3>No products! Go buy something</h3>
            }
        </div>
    );
};

export default Cart;
