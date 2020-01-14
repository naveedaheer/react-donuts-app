import React from 'react'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const ProductDetails = (props) => {
    const { product, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    if (product){
        return(
            
                <div className="container section product-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> {product.title} </span>
                        <p> {product.content} </p>        
                    </div>
                    
                </div>
            </div>
            
        )
    } else{
        return (
            <div className="container center">
                <p>Loading Product...</p>
            </div>
            )
    }
    
}

const mapStateToProps = (state,ownProps) => {
   
    const id = ownProps.match.params.id;
    const products = state.firestore.data.products;
    const product = products ? products[id] : null
    return{
        product: product,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'products'}
    ])
)(ProductDetails)
