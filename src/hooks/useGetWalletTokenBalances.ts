import { chainID } from "@/config/moralis-connect";
import Moralis from 'moralis';

const useGetWalletTokenBalances = async (ethAddress: string) => {
  
  const address = ethAddress;

  const response = await Moralis.EvmApi.token.getWalletTokenBalances({
    "chain": chainID.testNet,
    "tokenAddresses": [],
    "address": address
  });

  return response.raw
}
export default useGetWalletTokenBalances;
