const filterReducer = (state, action) => {
    console.log("action.payload", action.payload)

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            return {
                ...state,
                filter_products: [...action.payload],
                allproducts: [...action.payload],
            }

        case "SET_GRID_VIEW":
            console.log("SET_GRID_VIEWSET_GRID_VIEWSET_GRID_VIEW")
            return {
                ...state,
                grid_view: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            };


        case "GET_SORT_VALUE":
            let userSortValue = document.getElementById("sort")
            let sort_value =userSortValue.options[userSortValue.selectedIndex].value
            console.log("sort_valuesort_valuesort_valuesort_value")
            return {
            ...state,
            sorting_value:sort_value,
            }
        default: return state;
    }

}

export default filterReducer