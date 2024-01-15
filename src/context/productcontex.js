import { useEffect, useState, createContext, useContext, useReducer } from "react";
import reducer from "../reducer/productReducer"
import axios from 'axios'

export const AppContext = createContext("react")

const API = "https://api.pujakaitem.com/api/products"

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {}
}


export const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url)
            const products = res.data
            console.log("res", products)
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }

    }

    // const getSingleProduct = async (url) => {
    //     dispatch({ type: "SET_Single_LOADING" })
    //     try {
    //         const res = await axios.get(url)
    //         const singleproduct = await res.data
    //         console.log("SET_Single_LOADINGSET_Single_LOADINGSET_Single_LOADINGSET_Single_LOADINGSET_Single_LOADING")
    //         dispatch({ type: "SET_Single_PRODUCT", payload: singleproduct })
    //     } catch (error) {
    //         dispatch({ type: "SET_SINGLE_ERROR" })
    //     }
    // }
    
  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

    useEffect(() => {
        getProducts(API)
    }, [])

    return <AppContext.Provider value={{ ...state ,getSingleProduct}}>
        {children}
    </AppContext.Provider>

}

export const useProductContext = () => {
    return useContext(AppContext)
}
