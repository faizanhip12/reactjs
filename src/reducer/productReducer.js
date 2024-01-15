const productReducer = (state, action) => {

    //   if(action.type === 'SET_LOADING' ){
    // return {
    //     ...state,
    //     isLoading:true
    // }
    //   }
    switch (action.type) {
        case 'SET_LOADING':

            return {
                ...state,
                isLoading: true
            };

        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                console.log("llllllllllllllllllllllllllllllll",curElem)
                return curElem.featured === true
            })
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }

        case 'API_ERROR':

            return {
                ...state,
                isLoading: false,
                isEreor: true
            };
        default:
            return state
    }

}

export default productReducer