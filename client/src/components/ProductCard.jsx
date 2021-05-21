import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/actions';
import {Link} from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, img, price, stock, id } = product;

    const handleAddToCart = () => dispatch(addToCart(product));

    return (
        <div className='ProductCardGrid'>
            <img className='ProductCardImg' src={img} alt={name} />
            <div className='ProductCardName'>{name}</div>
            {
                stock
                ?
                <div className='ProductCardPrice'>{price}</div>
                :
                <div className='ProductCardPrice'>Sold Out</div>
            }
            {
                stock
                ?
                    <button className='ProductCardAddToCart' onClick={handleAddToCart} >Add to Cart</button>
                : null
            }
            <Link className='ProductCartMoreInfo' to={`/detail/${id}`}>
                More Info
            </Link>
        </div>
    );
};

export default ProductCard;
