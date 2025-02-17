import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'

 class SignUp extends Component {
    state = {
    email: '',
    password:'',
    firstName:'',
    lastName:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
    }

    render() {
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className="container">
            <form onSubmit ={this.handleSubmit} >
                <h5 className="white-text">Sign Up</h5>
                <div className="input-field">
                <label className="white-text"htmlFor="email">Email</label>
                <input className="white-text" type="email" id="email" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label className="white-text" htmlFor="password">Password</label>
                <input className="white-text" type="password" id="password" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label className="white-text" htmlFor="firstName">First Name</label>
                <input className="white-text" type="text" id="firstName" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label className="white-text" htmlFor="lastName">Last Name</label>
                <input className="white-text" type="text" id="lastName" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn red lighten-1 z-depth-0">Sign up</button>
                    <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
                </div>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: (newUser) =>  dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUp)
