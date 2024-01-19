import { createContext, useContext, useReducer, useEffect } from 'react'
import { useProductContext } from './productcontex'
import reducer from '../reducer/filter_reducer'

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sorting_value:"lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
    },

}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log("productsproductsproducts", products)

    const setGridView = () => {
        console.log("setGridViewsetGridViewsetGridView")
        return dispatch({ type: "SET_GRID_VIEW" });
    };

    // to set the list view
    const setListView = () => {
        console.log("setListViewsetListViewsetListViewsetListView")
        return dispatch({ type: "SET_LIST_VIEW" });
    };

    //sorting function

    const sorting = () => {
        console.log("sorting")
        dispatch({type:"GET_SORT_VALUE"})
    }


    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products])

    return <FilterContext.Provider value={{
        ...state,
        setGridView,
        setListView,
        sorting

    }}>
        {children}
    </FilterContext.Provider>
}


export const useFilterContext = () => {
    return useContext(FilterContext)
}