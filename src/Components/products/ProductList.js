import React from 'react';
import ProductSummary from './ProductSummary'
import {Link} from 'react-router-dom'

const ProductList = (props) =>{
    
    const {products} = props;

    function addToCart(pro) {
        let items = [];
        items = JSON.parse(window.localStorage.getItem('cartProducts')) || [];
        console.log("items", items);
        pro["quantity"] = 1;
        delete pro.createdAt;
        console.log("pro", pro);
        items.push(pro);
        window.localStorage.setItem('cartProducts', JSON.stringify(items));
    }

    return(
        <div className="product-list">
            {products && products.map( product => {
                return (
                    <div style={{display : 'contents'}}>
                        <Link to={'/product/' + product.id} key={product.id}  >
                        <ProductSummary  key={product.id} product={product}  />
                        </Link>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                )
            })}
        </div>

    )
}

export default ProductList