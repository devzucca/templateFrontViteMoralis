import { useContext, useEffect } from "react";

import UserContext from "@/context/user-context/UserContext";
import RenderNftStateContext from "@/context/renderNft-context/RenderNftStateContext";

const useDataRenderHome = () => {
  const {
    SubscriptionNftCarouselLive,
    getNftCarouselLive,
    getNftCarouselCollection,
    getNftCarouselExplore,
    getTopSellersFunc,
  } = useContext(RenderNftStateContext);
  const { userRender, loginType, clearDataUser } = useContext(UserContext);

  useEffect(() => {
    if(!userRender){
      clearDataUser()
    }
    async function fetchData() {
      await SubscriptionNftCarouselLive();
      await getNftCarouselLive();
      await getTopSellersFunc();
      await getNftCarouselCollection();
      await getNftCarouselExplore();
    }
    fetchData();
  }, []);
};

export default useDataRenderHome;
