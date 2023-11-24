import React, { createContext } from "react";
import { useMoralis } from "react-moralis";

import { useBoundStore } from "@/stores/index";

type ContextType = {
  getDataContentLive: () => Promise<void>;
  getDataContentExplore: (id: any) => Promise<void>;
  getDataContentUsers: (id: any) => Promise<void>;
} | null;

export const FunctionsManageAppContext = createContext<ContextType>(null);

const FunctionsManageApp = (props: any) => {

  const { Moralis } = useMoralis();

  const {
    StateTabsUser,
    StateTabsPerfilNft,
    TabsAccordion,
    StateTabPerfilUser,
    StateTabPerfilArtist,
    StateTabPerfilCollection,
    setStateTabsUser,
    setStateTabsPerfilNft,
    setTabsAccordion,
    
    setStateTabPerfilUser,
    setStateTabPerfilArtist,
    setStateTabPerfilCollection,

    SizeViewPortUser,
    SizeViewPortNft,
    StateActivityNft,
    setSizeViewPortUser,
    setSizeViewPortNft,
    setStateActivityNft,

    StateStepModalCreateNft,
    StateErrorModalCreateNft,
    StateOpenModalCreateNft,
    StateProcessModalCreateNft,
    StateValueTypeModalStep,
    ValueModalCollection,
    setStateStepModalCreateNft,
    setStateErrorModalCreateNft,
    setStateOpenModalCreateNft,
    setStateProcessModalCreateNft,
    setStateValueTypeModalStep,
    setValueModalCollection,

    StateCircularProgress,
    setStateCircularProgress,

    FilterCoincidenceHome,
    FilterRenderPerfilNft,
    InputSearchHomeResponsive,
    setFilterCoincidenceHome,
    setFilterRenderPerfilNft,
    setInputSearchHomeResponsive,

    StateAlert,
    MessageAlert,
    TypeAlert,
    setStateAlert,
    setMessageAlert,
    setTypeAlert,
    
  } = useBoundStore()

  const getFilterItemsHomeFunc = async (inputValue: any): Promise<void> => {
    try {
      let resultFilterCoincidence = await Moralis.Cloud.run(
        "getFilterItemsHome",
        { inputValue }
      );
      
      dispatch({
        type: "SET_STATE_FILTER_COINCIDENCE_HOME",
        payload: resultFilterCoincidence,
      });

    } catch (error: any) {
      return error;
    }
  };

  const setstateFilterRenderPerfilNft = async (
    stateRender: any
  ): Promise<void> => {
    try {
      dispatch({
        type: "SET_STATE_FILTER_RENDER_PERFIL_NFT",
        payload: stateRender,
      });
    } catch (error: any) {
      return error;
    }
  };

  function handleChangeTabsPerfilNftFunc(_even: any, valueStab: any): void {
    dispatch({
      type: "SET_STATE_TABS_PERFIL_NFT",
      payload: valueStab,
    });
    if (state.stateTabsPerfilNft == "1") {
      dispatch({
        type: "SET_TABS_STATE_ACCORDION",
        payload: false,
      });
      dispatch({
        type: "SET_SIZE_VIEWPORT_NFT",
        payload: 900,
      });
    } else if (state.stateTabsPerfilNft == "2") {
      dispatch({
        type: "SET_TABS_STATE_ACCORDION",
        payload: false,
      });
      dispatch({
        type: "SET_SIZE_VIEWPORT_NFT",
        payload: 900,
      });
    } else if (state.stateTabsPerfilNft == "3") {
      dispatch({
        type: "SET_TABS_STATE_ACCORDION",
        payload: false,
      });
      dispatch({
        type: "SET_SIZE_VIEWPORT_NFT",
        payload: 900,
      });
    }
  }

  const handleChangeAccordionNftFunc = (_event: React.SyntheticEvent, newExpanded: boolean) => {
      dispatch({
        type: "SET_TABS_STATE_ACCORDION",
        payload: newExpanded ? true : false,
      });

      if (state.tabsAccordion == false && state.stateTabsPerfilNft == "1") {
        dispatch({
          type: "SET_SIZE_VIEWPORT_NFT",
          payload: 1350,
        });
      } else if (
        state.tabsAccordion == false &&
        state.stateTabsPerfilNft == "2"
      ) {
        dispatch({
          type: "SET_SIZE_VIEWPORT_NFT",
          payload: 1050,
        });
      } else if (
        state.tabsAccordion == false &&
        state.stateTabsPerfilNft == "3"
      ) {
        dispatch({
          type: "SET_SIZE_VIEWPORT_NFT",
          payload: 1550,
        });
      } else {
        dispatch({
          type: "SET_SIZE_VIEWPORT_NFT",
          payload: 900,
        });
      }
  };

  function setDataPreviewCreateNftFunc(
    name: string,
    price: number,
    minimumBid: number
  ): void {
    name
      ? dispatch({
          type: "SET_PREVIEW_NAME_CREATE_NFT_STATE",
          payload: name,
        })
      : null;

    price
      ? dispatch({
          type: "SET_PREVIEW_PRICE_CREATE_NFT_STATE",
          payload: price,
        })
      : null;
    minimumBid
      ? dispatch({
          type: "SET_PREVIEW_MINIMUMBID_CREATE_NFT_STATE",
          payload: minimumBid,
        })
      : null;
  }

  function resetDataPreviewCreateNftFunc(): void {
    dispatch({
      type: "SET_PREVIEW_IMG_CREATE_NFT_STATE",
      payload: undefined,
    });
    dispatch({
      type: "SET_PREVIEW_NAME_CREATE_NFT_STATE",
      payload: "",
    });

    dispatch({
      type: "SET_PREVIEW_PRICE_CREATE_NFT_STATE",
      payload: "",
    });

    dispatch({
      type: "SET_PREVIEW_MINIMUMBID_CREATE_NFT_STATE",
      payload: "",
    });
  }

  function handleChangeTabsUser(even: any, valueStab: any): void {
    dispatch({
      type: "SET_STATE_TABS_USER",
      payload: valueStab,
    });
    if (valueStab == "1" || valueStab == "2") {
      dispatch({
        type: "SET_SIZE_VIEWPORT_USER",
        payload: 2050,
      });
    } else if (valueStab == "3") {
      dispatch({
        type: "SET_SIZE_VIEWPORT_USER",
        payload: 1300,
      });
    }
  }

  function selectTypeMintModalStepsFunc(typeMint: string): void {
    dispatch({
      type: "SET_VALUE_TYPE_MODAL_STEPS",
      payload: typeMint,
    });
  }

  function handleNextModalStepFunc(
    error: any,
    result: any,
    index: any,
    open: any
  ): void {
    if (open === true) {
      dispatch({
        type: "SET_OPEN_MODAL_CREATE_NFT",
        payload: true,
      });
    } else if (open == false) {
      dispatch({
        type: "SET_OPEN_MODAL_CREATE_NFT",
        payload: false,
      });
    }

    if (result === true) {
      dispatch({
        type: "SET_STATE_STEP_MODAL_CREATE_NFT",
        payload: index++,
      });
    } else if (result == false) {
      dispatch({
        type: "SET_PROCESS_MODAL_CREATE_NFT",
        payload: index,
      });
      dispatch({
        type: "SET_STATE_STEP_MODAL_CREATE_NFT",
        payload: index,
      });
    }
    if (error === true) {
      dispatch({
        type: "SET_ERROR_MODAL_CREATE_NFT",
        payload: true,
      });
    }
  }

  const handleResetModalStepFunc = (): void => {
    dispatch({
      type: "SET_PROCESS_MODAL_CREATE_NFT",
      payload: 0,
    });
    dispatch({
      type: "SET_STATE_STEP_MODAL_CREATE_NFT",
      payload: 0,
    });
    dispatch({
      type: "SET_OPEN_MODAL_CREATE_NFT",
      payload: false,
    });
    dispatch({
      type: "SET_ERROR_MODAL_CREATE_NFT",
      payload: false,
    });
  };

  const handleCloseModalStepFunc = (): void => {
    dispatch({
      type: "SET_OPEN_MODAL_CREATE_NFT",
      payload: false,
    });
  };

  function setStateTabPerfilArtists(newValue: any): void {
    dispatch({
      type: "SET_STATE_TAB_PERFIL_ARTIST",
      payload: newValue,
    });
  }

  const recoverPasswordResetFunc = async (currentUser: any): Promise<void> => {
    try {
      let resultrecoverPasswordResetFunc = await Moralis.Cloud.run(
        "requestPasswordReset",
        { currentUser }
      );
    } catch (error: any) {
      return error;
    }
  };

  const verifiedPasswordFunc = async (currentUser: any): Promise<void> => {
    try {
      let resultVerifiedPasswordFunc = await Moralis.Cloud.run(
        "sendVerificationEmail",
        { currentUser }
      );
    } catch (error: any) {
      return error;
    }
  };

  return (
    <FunctionsManageAppContext.Provider
      value={{
        getDataContentLive,
        getDataContentExplore,
        getDataContentUsers
      }}
    >
      {props.children}
    </FunctionsManageAppContext.Provider>
  );
};

export default FunctionsManageApp;
