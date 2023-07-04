import { auth } from "@/config/moralis-connect";
import { EvmChain } from '@moralisweb3/common-evm-utils';
import Moralis from 'moralis';

const useGetTokenPrice = async () => {
  
  const chain = EvmChain.BSC;

  const response = await Moralis.EvmApi.token.getTokenPrice({
    "chain": chain,
    "exchange": "pancakeswap-v2",
    "address": auth.currencyContract
  });

  const responseToJSON = response.toJSON()
  const priceUsdMatic = responseToJSON.usdPrice

  return priceUsdMatic
}
export default useGetTokenPrice;
