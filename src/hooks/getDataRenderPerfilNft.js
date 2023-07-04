import React, { useState, useEffect,useContext } from 'react';

import RenderNftStateContext from "@context/renderNft-context/RenderNftStateContext";

const getDataRenderPerfilNft = () => { 


  const {
    getNftPageExplore,
    getNft,
  } = useContext(RenderNftStateContext);

  
  useEffect(() => {

    async function fetchData() {
      await getNft()
      await getNftPageExplore()
    }
    fetchData()

  }, [])


}

export default getDataRenderPerfilNft