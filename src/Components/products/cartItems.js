import React, { Component } from 'react';
import {connect } from 'react-redux';
import {orderSubmit} from '../../store/actions/orderActions'


class CartItems extends Component {
    constructor() {
        super();
        this.state = {
            items: null,
            orderPersonName: '',
            orderDetails : ''
        };
      }

    componentWillMount() {
        this.setState({
            items : JSON.parse(window.localStorage.getItem('cartProducts'))
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.orderSubmit({
            uid : this.props.auth.uid,
            orderPersonName : this.state.orderPersonName,
            orderDetails : this.state.orderDetails,
            products: this.state.items
        })
        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    updateQuantity(i, sign) {
         if(sign==='+'){
            let itemsCopy = JSON.parse(JSON.stringify(this.state.items))
            itemsCopy[i].quantity = itemsCopy[i].quantity+1
            this.setState({
                items : itemsCopy
            })
        }
        else {
            let itemsCopy = JSON.parse(JSON.stringify(this.state.items))
            itemsCopy[i].quantity = itemsCopy[i].quantity-1
            this.setState({
                items : itemsCopy
            })
        }
    }

    removeItem(i){
        let itemsCopy = JSON.parse(JSON.stringify(this.state.items))
        itemsCopy.splice(i,1);
        this.setState({
            items : itemsCopy
        });
        window.localStorage.clear();
        window.localStorage.setItem('cartProducts', JSON.stringify(itemsCopy));
    }

    render() {
      return (
          <div className="container white-text text-darken-3">
            <h5 className="white-text text-darken-3">Products in your Cart</h5>
            <div>
                {this.state.items && this.state.items.map((item, i)=>
                    <div className="card" key={i}>
                        <div className="card-content black-text" style={{display:'flex', justifyContent:'space-between'}}>
                            <span>{item.title}</span>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <div>
                                    <button className="btn pink lighten-1 z-depth-0" onClick={() => this.updateQuantity(i,'-')}>-</button>
                                    <span style={{margin:'20px'}}>{item.quantity}</span>
                                    <button className="btn pink lighten-1 z-depth-0"  onClick={() => this.updateQuantity(i,'+')}>+</button>
                                </div>
                                <button className="btn pink lighten-1 z-depth-0" onClick={() => this.removeItem(i)} style={{marginLeft:'20px'}}>Remove</button>
                            </div>
                        </div>
                    </div>
                )}

                <div style={{marginTop:'40px'}}>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="input-field">
                            <label className= "white-text" htmlFor="title">Name</label>
                            <input className= "white-text" type="text" id="orderPersonName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label className= "white-text"htmlFor="content">Order Details(Optional)</label>
                            <textarea  id="orderDetails" className="white-text materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Checkout</button>
                        </div>
                    </form>
                </div>
            </div>
          </div>
        );
    }
  }

  const mapStateToProps = (state) => {
   console.log("state", state)
    return {
        auth: state.firebase.auth,
        // auth: state.orderReducer

    }
  }

  const mapDispatchToProps = dispatch => {
      return {
        orderSubmit: (order) => dispatch (orderSubmit(order))
      }

  }

  export default connect(mapStateToProps,mapDispatchToProps) (CartItems)