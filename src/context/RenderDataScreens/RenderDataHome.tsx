import React, { createContext } from "react";
import { useMoralis } from "react-moralis";

import { useBoundStore } from "@/stores/index";

type ContextType = {
  getDataContentLive: () => Promise<void>;
  getDataContentExplore: (id: any) => Promise<void>;
  getDataContentUsers: (id: any) => Promise<void>;
} | null;

export const RenderDataHome = createContext<ContextType>(null);

const RenderNftState = (props: any) => {

  const { Moralis } = useMoralis();

  const {
    DataContentLive,
    DataContentExplore,
    DataContentUsers,
    setDataContentLive,
    setDataContentExplore,
    setDataContentUsers
  } = useBoundStore()

  
  const getDataContentLive = async () => {
    let resDataContentLive: any = await Moralis.Cloud.run("getDataContentLive");

    setDataContentLive(resDataContentLive)
  };

  const getDataContentExplore = async (id: any) => {
    const idConvertType = id;

    let resDataContentExplore: any = await Moralis.Cloud.run("getDataContentExplore", {
      idConvertType
    });

    setDataContentExplore(resDataContentExplore);
  };

  const getDataContentUsers = async (id: any) => {

    const idConvertType = id;

    let resDataContentUsers: any = await Moralis.Cloud.run("getDataContentUsers", {
      idConvertType,
    });

    setDataContentUsers(resDataContentUsers);
  };

  const SubscriptionDataContentExplore = async () => {
    const query = new Moralis.Query("ItemsMinted");
    let subscription = await query.subscribe();

    subscription.on("create", SubscriptionDataContentExplore);
    subscription.on("update", getDataContentLive);
  };

  return (
    <RenderDataHome.Provider
      value={{
        getDataContentLive,
        getDataContentExplore,
        getDataContentUsers
      }}
    >
      {props.children}
    </RenderDataHome.Provider>
  );
};

export default RenderNftState;
