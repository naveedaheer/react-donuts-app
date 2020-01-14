import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../../store/actions/productActions'
import { Redirect } from 'react-router-dom'
// import storage from "../../config/fbConfig";
import * as firebase from 'firebase'

class CreateProduct extends Component {
    state = {
        title: '',
        content:'',
        image: null,
        url : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleImage = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
          }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { image } = this.state;
        const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
        uploadTask.on(
        "state_changed",
        snapshot => {
            // progress function ...
            const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        },
        error => {
            // Error function ...
            console.log(error);
        },
        () => {
            // complete function ...
            firebase.storage()
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(url => {
                this.setState({ url });
                this.props.createProduct(this.state)
                this.props.history.push('/');
            });
        });
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' /> 
        return (
            <div className="container">
            <form onSubmit ={this.handleSubmit} >
                <h5 className="white-text text-darken-3">Create a new product</h5>
                <div className="input-field">
                <label className= "white-text" htmlFor="title">Title</label>
                <input className= "white-text" type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label className= "white-text"htmlFor="content">Product details</label>
                <textarea  id="content" className="white-text materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="file-field input-field">
                <div className="btn pink lighten-1 z-depth-0">
                    <span>Upload foto</span>
                    <input type="file" id="image" onChange={this.handleImage}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
            </div>
        )
    }
}
const mapDispatchToprops = dispatch => {
    return{
        createProduct: (product) => dispatch (createProduct(product))
    }
}
const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps, mapDispatchToprops) (CreateProduct)
