const filterReducer = (state, action) => {
 
switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
        return {
            ...state,
            filter_product:[...action.payload],
            allproducts:[...action.payload],
        }
    

    default:return state;
}

}

export default filterReducer