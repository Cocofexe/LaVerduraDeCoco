import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idProduct } from '../app/actions';
import './Detail.css'

const Detail = (props) => {
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const product = useSelector(state => state.productId)
    useEffect(()=> {
        dispatch(idProduct(id))
    },[dispatch, id]);
    console.log(product)
    return (
        <div className='DetailGrid'>
            <img className='DetailImage' src={product.img} alt={product.name} />
            <div className='DetailName'>{product.name}</div>
            <div className='DetailDescription'>Description</div>
            <div className='DetailDescriptionText'>{product.description}</div>
            <div className='DetailPrice'>$ {product.price}</div>
            <div className='DetailStock'>Stock: {product.stock}</div>
        </div>
    );
};

export default Detail;
