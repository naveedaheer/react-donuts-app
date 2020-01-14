import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'

export class SignIn extends Component {
    state = {
    email: '',
    password:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const {auth, authError} = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
            <form onSubmit ={this.handleSubmit} >
                <h5 className="white-text text-darken-3">Sign in</h5>
                <div className="input-field">
                <label className="white-text" htmlFor="email">Email</label>
                <input className="white-text" type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label className="white-text" htmlFor="password">Password</label>
                <input className="white-text" type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                    <div className="red-text center">
                    { authError ? <p>{authError}</p> : null }
                    </div>
                </div>
            </form>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn:(creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( SignIn)
