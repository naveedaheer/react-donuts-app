export const createProduct = (product) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('products').add({
            ...product,
            createdAt: new Date()
        }).then(() =>{
            dispatch({ type:'CREATE_PRODUCT_SUCCES'});

        }).catch((err)=> {
            dispatch({type: 'CREATE_PRODUCT_ERROR'}, err);
        });
    }
};