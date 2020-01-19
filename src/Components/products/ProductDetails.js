import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { deleteProduct, resetProductStateAfterDelete } from './../../store/actions/productActions';

const ProductDetails = (props) => {
    const { product, auth, productId } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if(props.success){
        // alert("Deleted Successfully")
        
        props.history.push("/");
props.reset();
    }
    function deleteProduct() {
        props.deleteProductById(productId)
    }
    if (product) {
        return (

            <div className="container section product-details">
                <div className="card z-depth-0">
                    <div className="card-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>

                            <span className="card-title"> {product.title} </span>
                            <p>Price: {product.price} </p>
                            <p>Description: {product.content} </p>
                        </div>
                        <button onClick={() => deleteProduct()} className="btn pink lighten-1 z-depth-0">Delete</button>

                    </div>

                </div>
            </div>

        )
    } else {
        return (
            <div className="container center">
                <p>Loading Product...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const products = state.firestore.data.products;
    const product = products ? products[id] : null
    return {
        product: product,
        auth: state.firebase.auth,
        productId: id,
        success: state.product.success
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProductById: (id) => dispatch(deleteProduct(id)),
        reset: () => dispatch(resetProductStateAfterDelete())
    }

}
// export default connect(mapStateToProps,mapDispatchToProps) (ProductDetails)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'products' }
    ])
)(ProductDetails)
