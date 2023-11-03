import { chainID } from "@/config/moralis-connect";
import Moralis from "moralis";
const useGetNativeBalance = async (ethAddress) => {
  const address = ethAddress;
  const response = await Moralis.EvmApi.balance.getNativeBalance({
    chain: chainID.testNet,
    address: address,
  });
  return response.raw;
};
export default useGetNativeBalance;
