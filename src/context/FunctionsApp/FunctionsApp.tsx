import React, { createContext } from "react";
import { useMoralis } from "react-moralis";

import { useBoundStore } from "@/stores/index";

type ContextType = {
  setValuesAlertFunc: (state: any, message: any, type: any) => void;  
} | null;

export const FunctionsAppContext = createContext<ContextType>(null);

const FunctionsApp = (props: any) => {

  const { Moralis } = useMoralis();

  const {
    setStateAlert,
    setMessageAlert,
    setTypeAlert,
  } = useBoundStore()

  const setValuesAlertFunc = (state: any, message: any, type: any) => {

    setStateAlert(state);
    message ? setMessageAlert( message) : null;
    type ? setTypeAlert(type) : null;

  };


  return (
    <FunctionsAppContext.Provider
      value={{
        setValuesAlertFunc
      }}
    >
      {props.children}
    </FunctionsAppContext.Provider>
  );
};

export default FunctionsApp;
