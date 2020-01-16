export const orderSubmit = (order) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('orders').add({
            ...order,
            createdAt: new Date()
        }).then((data) =>{
            dispatch({ type:'CREATE_ORDER_SUCCESS'});

        }).catch((err)=> {
            dispatch({type: 'CREATE_ORDER_ERROR'}, err);
        });
    }
};