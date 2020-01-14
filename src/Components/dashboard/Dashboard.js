import React, { Component } from 'react'
import ProductList from '../products/ProductList'
import {connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import donut from '../../images/donut/donut2.png'

// CSS
import "./dashboard.css"

class Dashboard extends Component{
    render(){

       const { products,auth } = this.props;
       if (!auth.uid) return <Redirect to='/signin' />
        return(
            <div className="dashboard">
                <div className="presentation">
                    <div className="top">
                        <div className="slogan">
                            <h1>Gonuts</h1>
                            <h2>Homemade is always better</h2>
                        </div>
                        <img src={donut} alt="donut"/>
                    </div>
                   
                    <div className="bottom">
                        <div className="center">
                            {/*
                                <p>Voir toutes nos saveurs</p>
                                <div className="pijl"></div>
                            */}
                        </div>
                    </div>
                </div>
                <div className="dashboard-child">
                    <div className="top"></div>
                  
                    <ProductList products ={products}/>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => {
   console.log(state);
    return{
        products: state.firestore.ordered.products,
        auth: state.firebase.auth
    }
}

export default compose (
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'products', orderBy: ['createdAt','desc']}
    ])
) (Dashboard)
