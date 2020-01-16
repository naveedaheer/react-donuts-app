const initState = {

}

const orderReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_ORDER_SUCCESS':
            console.log('created product', action.order);
            return state;
            case 'CREATE_ORDER_ERROR':
                console.log('create project error', action.err);
                return state;
                default: 
                return state;
    }
 
}

export default orderReducer