import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProduct } from '../app/actions';
import './Catalogue.css'
import ProductCard from './ProductCard';

const Catalogue = () => {
    const dispatch = useDispatch();
    const productsFiltered = useSelector((state) => state.productsFiltered);
    const [filter, setFilter] = useState(" ")

    const handleChange = e => {
       setFilter(e.target.value)
       dispatch(filterProduct(filter))
    }

    useEffect(() => {
        dispatch(filterProduct(filter));
      }, [dispatch, filter]);

    return (
        <div className='CatalogueGrid'>
            <select onChange={handleChange} className='CatalogueFilter' name="" id="">
                <option value=" ">Filter</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            <div className='CatalogueProducts'>
                {
                    productsFiltered && productsFiltered.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Catalogue;
