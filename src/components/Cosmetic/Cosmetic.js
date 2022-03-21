import React from 'react';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic;

    const addToCart = (id) => {
        console.log('item added', id);

    }
    const addToCartWithParam = () => addToCart(id);

    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: {price}</p>
            <p>it has id: {id}</p>
           {/*  <button onClick={addToCartWithParam}>Add to Cart</button> */}
            <button onClick={ () => addToCart(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;