import { useEffect, useState, createContext } from "react";

export const AppContext = createContext("react")

export const AppProvider =({children})=>{
  return  <AppContext.Provider value="thappa">
        {children}
    </AppContext.Provider>

}
