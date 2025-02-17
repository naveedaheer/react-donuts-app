import authReducer from './authReducer'
import productReducer from './productReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
// methode om de reducers te combineren
const rootReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer