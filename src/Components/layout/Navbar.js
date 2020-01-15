import React from 'react'
import { Link } from 'react-router-dom'
import SignedInlinks from './SignedInLinks'
import SignedOutlinks from './SignedOutlinks'
import {connect} from  'react-redux'


const Navbar = (props) => {
    const {auth, profile} = props;
    //console.log(auth);
    const links = auth.uid ? <SignedInlinks profile={profile}/> : <SignedOutlinks/>;
return(
   <nav className="navbar">
        <Link to='/' className="brand-logo">Gonuts</Link>
        {links}
   </nav> 

)
}
const mapStateToProps = (state) => {
    // console.log(state);
    return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (Navbar)