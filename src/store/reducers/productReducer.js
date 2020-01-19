const initState = {
    success: null
}

const productReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PRODUCT':
            console.log('created product', action.product);
            return state;
            case 'CREATE_PRODUCT_ERROR':
                console.log('create project error', action.err);
                return state
                case 'DELETE_PRODUCT_SUCCESS':
            return Object.assign({}, state, {success: true});
            case 'DELETE_PRODUCT_ERROR':
                console.log('create project error', action.err);
                return state;
                case 'DELETE_RESET':
                    return Object.assign({}, state, {success: false});
                    default: 
                return state;
    }
 
}

export default productReducer