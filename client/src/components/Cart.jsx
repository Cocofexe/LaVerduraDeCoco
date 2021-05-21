import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css'
import { getCart, deleteCart } from '../app/actions';
import CartItem from './CartItem';
import CartTotal from './CartTotal';

const Cart = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector(state => state.cart);

    useEffect(() => dispatch(getCart()), [dispatch]);

    const handleDeleteCart = () => dispatch(deleteCart());

    return (
        <div className='CartGrid'>
            {
                productsInCart && productsInCart.length ?
                    <div>
                        <div className='CartFlex'>
                            {
                                productsInCart.map(product => <CartItem key={product.id} product={product} />)
                            }
                            <button className='CartDelete' onClick={handleDeleteCart} >Delete Cart</button>
                        </div>
                        <div className='CartTotal'>
                            <CartTotal products={productsInCart} />
                        </div>
                    </div>
                : <h3>No products! Go buy something</h3>
            }
        </div>
    );
};

export default Cart;
