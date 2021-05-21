import Swal from 'sweetalert2';

export const GET_ALL_PRODUCTS= 'GET_ALL_PRODUCTS';
export const ADD_TO_CART= 'ADD_TO_CART';
export const GET_CART= 'GET_CART';
export const CHANGE_QUANTITY= 'CHANGE_QUANTITY';
export const DELETE_CART = 'DELETE_CART';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const ID_PRODUCT = 'ID_PRODUCT';
export const PAY_PRODUCTS = 'PAY_PRODUCTS';
export const FILTER_PRODUCT = 'FILTER_PRODUCT'

export function getAllProducts(){
    return (dispatch, getState)=>{
            dispatch({ type: GET_ALL_PRODUCTS, payload: getState().products })
    }
};

export const addToCart = (product) => dispatch => {
    let productsInCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if(!productsInCart.length) localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1 }]));
    else {
        var flag = false;
        productsInCart.forEach(productInLS => {
            if(productInLS.id === product.id) {
                flag = true;
                productInLS.quantity += 1;
            };
        });
        if (!flag) productsInCart.push({ ...product, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(productsInCart));
    };
    dispatch({ type: ADD_TO_CART, payload: productsInCart });
};

export const changeQuantity = (id, quantity) => dispatch => {
    const productsInCart = JSON.parse(localStorage.getItem('cart') || '[]');
    productsInCart.map(product => {
        if(product.id === id) return { ...product, quantity };
        return product;
    });
    localStorage.setItem('cart', JSON.stringify(productsInCart));
    dispatch({ type: CHANGE_QUANTITY, payload: { id, quantity }});
};

export const getCart = () => dispatch => {
    dispatch({ type: GET_CART, payload: JSON.parse(localStorage.getItem('cart')) });
};

export const deleteCart = () => dispatch => {
    localStorage.clear();
    dispatch({ type: DELETE_CART });
};

export const deleteProduct = id => dispatch => {
    const productsInCart = JSON.parse(localStorage.getItem('cart') || '[]').filter(product => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(productsInCart));
    dispatch({ type: DELETE_PRODUCT, payload: id });
};

export const idProduct = (id) => dispatch => {
    console.log("ID: ", id);
    dispatch({ type: ID_PRODUCT, payload: id });
};

export const payProducts = (productsInCart) => (dispatch, getState) => {
    const products = getState().products.map(product => {
        for (let index = 0; index < productsInCart.length; index++) {
            if (product.name === productsInCart[index].name) {
                return { ...product, stock: product.stock - productsInCart[index].quantity, quantity: 0 };
            }
        };
        return product;
    });

    Swal.fire({
        icon: 'success',
        title: 'Thanks for your purchase!!',
        showConfirmButton: false,
        timer: 1000,
    });
    localStorage.clear();
    dispatch({ type: PAY_PRODUCTS, payload: products });
};

export const filterProduct = (filter) => (dispatch, getState) => {
    let products = getState().products
    if (filter === 'Fruits'){
        products = products.filter( product => product.category === 'Fruits')
    }
    if (filter === 'Vegetables') {
        products = products.filter( product => product.category === 'Vegetables')
    }
    dispatch({ type: FILTER_PRODUCT, payload: products });
};
