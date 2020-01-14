const initState = {

}

const productReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PRODUCT':
            console.log('created product', action.product);
            return state;
            case 'CREATE_PRODUCT_ERROR':
                console.log('create project error', action.err);
                return state;
                default: 
                return state;
    }
 
}

export default productReducer