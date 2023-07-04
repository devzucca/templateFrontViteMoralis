import { useContext, useEffect } from 'react';

import RenderNftStateContext from "@/context/renderNft-context/RenderNftStateContext";

const useDataRenderCreateNft = () => { 

  const {
    getCollectionCreateNft,
  } = useContext(RenderNftStateContext);

  
  useEffect(() => {

    async function fetchData(){
      await getCollectionCreateNft()
    }
    fetchData()

  }, [])


}

export default useDataRenderCreateNft