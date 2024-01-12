import { useEffect, useState, createContext,useContext } from "react";

export const AppContext = createContext("react")

export const AppProvider =({children})=>{
  return  <AppContext.Provider value="thappa">
        {children}
    </AppContext.Provider>

}

export const useProductContext=()=>{
    return useContext(AppContext)
}
