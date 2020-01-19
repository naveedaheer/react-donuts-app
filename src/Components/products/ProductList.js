import React from 'react';
import ProductSummary from './ProductSummary'
import {Link} from 'react-router-dom'

const ProductList = (props) =>{
    
    const {products} = props;

    function addToCart(pro) {
        let product = pro;
        let items = [];
        items = JSON.parse(window.localStorage.getItem('cartProducts')) || [];
        product["quantity"] = 1;
        delete product.createdAt;
        items.push(product);
        window.localStorage.setItem('cartProducts', JSON.stringify(items));
    }

    return(
        <div className="product-list">
            {products && products.map( (product, i) => {
                return (
                    <div key={i} style={{display : 'grid', margin:'15px'}}>
                        <Link to={'/product/' + product.id} key={product.id}  >
                        <ProductSummary  key={product.id} product={product}  />
                        </Link>
                <button onClick={() => addToCart(product)} className="btn pink lighten-1 z-depth-0">Add to Cart</button>
                    </div>
                )
            })}
        </div>

    )
}

export default ProductList