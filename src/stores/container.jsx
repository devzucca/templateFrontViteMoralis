import { createContext, useContext, useRef } from "react";
import { create } from "zustand";
const StoreContext = createContext(null);
import { useMoralis } from "react-moralis";
import { chainID, contracts } from "@/config/moralis-connect";
import { Moralis } from "moralis-v1";
import useGetNativeBalance from "@/stores/useGetNativeBalance";
import useGetWalletTokenBalances from "@/stores/useGetWalletTokenBalances";

export const UserProvider = ({ children }) => {
  const { logout, enableWeb3, authenticate } = useMoralis();

  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = create((set) => ({
      userRender: [],
      authenticated: false,
      loginType: "",
      AmountKnrtUser: "",
      MaticBalance: "",

      switchNetworkPolygon: async function () {
        await Moralis.switchNetwork(chainID.testNet);
      },

      fetchTokenBalance: async (ethAddress) => {
        const balances = await useGetWalletTokenBalances(ethAddress);
        const balanceMaticConvert = await useGetNativeBalance(ethAddress);

        balances.forEach((value) => {
          if (
            value.token_address.toLowerCase() === contracts.token.toLowerCase()
          ) {
            const balanceConvert = Moralis.Units.FromWei(value.balance);
            set({ AmountKnrtUser: balanceConvert });
          }
        });
        var balance = Moralis.Units.FromWei(balanceMaticConvert.balance);
        set({ MaticBalance: balance });
        return balance;
      },

      Login: async () => {
        try {
          const provider = "metamask";
          await enableWeb3({ throwOnError: true, provider });
          const { account, chainId } = Moralis;

          const { message } = await Moralis.Cloud.run("requestMessage", {
            address: account,
            chain: chainId,
            networkType: "evm",
          });

          if (!account) {
            throw new Error(
              "Connecting to chain failed, as no connected account was found"
            );
          }
          if (!chainId) {
            throw new Error(
              "Connecting to chain failed, as no connected chain was found"
            );
          }
          if (!storeRef.current.getState().authenticated) {
            if (chainId != chainID.testNet) {
              await storeRef.current.getState().switchNetworkPolygon();
            }
            const user = await authenticate({
              signingMessage: message,
            }).then(async (user) => {
              const userMarketType = user.get("loginType");
              const ethAddres = user.get("ethAddress");
              set({ userRender: user });
              set({ authenticated: true });
              set({ loginType: userMarketType });

              let resultFetchTokenBalance = await storeRef.current
                .getState()
                .fetchTokenBalance(ethAddres);
            });
          }
        } catch (e) {
          e.message == "Cannot read properties of undefined (reading 'get')"
            ? (e.message = "an error occurred, please try again")
            : e.message;
          const errorMessage = JSON.stringify(e.message);
          const errorObjeto = JSON.parse(errorMessage);
        }
      },

      // LoginFunction: async () => {
      //   let result = await this.Login();
      //   if (result) {
      //     set({ userRender: result[0] });
      //     // set({ authenticated: result[1] });
      //     set({ loginType: result[2] });
      //     set({ AmountKnrtUser: result[3] });
      //   }
      // },
      // LoginMailFunction: async (values) => {
      //   let result = await LoginMail(LoginMail);
      //   if (result) {
      //     set({ userRender: result[0] });
      //     // set({ authenticated: result[1] });
      //     set({ loginType: result[2] });
      //     set({ AmountKnrtUser: result[3] });
      //   }
      // },
    }));
  }
  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreInContext = (selector) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Missing StoreProvider");
  }
  return store(selector);
};
