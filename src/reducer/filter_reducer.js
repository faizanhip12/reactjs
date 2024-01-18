const filterReducer = (state, action) => {
    console.log("action.payload",action.payload)
 
switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
        return {
            ...state,
            filter_products:[...action.payload],
            allproducts:[...action.payload],
        }

    case "SET_GRID_VIEW":
        console.log("SET_GRID_VIEWSET_GRID_VIEWSET_GRID_VIEW")
        return{
            ...state,
            grid_view:true
        }    
    

    default:return state;
}

}

export default filterReducer