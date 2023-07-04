import Moralis from 'moralis';


const readAsBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      if (typeof result === 'string') {
        const base64Data = result.split(",")[1];
        resolve(base64Data);
      } else {
        reject(new Error("Error al leer el archivo."));
      }
    };

    reader.onerror = () => {
      reject(new Error("Error al leer el archivo."));
    };

    reader.readAsDataURL(file);
  });
};

const removeBaseUrl = (url: string) => {
  const baseUrl = 'https://ipfs.moralis.io:2053/ipfs/';
  return url.replace(new RegExp(`^${baseUrl}`), '');
};

const useSetIpfsUploadFolder = async (ethAddress: any, content: any, contentName: string, ifNft: boolean) => {
  console.log("ethAddressIPFS", ethAddress)
  console.log("contentIPFS", content)
  console.log("contentNameIPFS", ethAddress)


  try{

    if(ifNft){

     const abi: any  = [
        {
            path: contentName,
            content: {
              name: content.name,
              description: content.description,
              image: content.image,
              attributes: [
                {
                  "trait_type": "energy",
                  value: content.energy
                },
                {
                  "trait_type": "force",
                  value: content.force
                },
                {
                  "trait_type": "impact",
                  value: content.impact
                },
                {
                  "trait_type": "sustainability",
                  value: content.sustainability
                },
                {
                  "trait_type": "value",
                  value: content.valueNft
                },
                {
                  "trait_type": "rarity",
                  value: content.rarity
                },
                {
                  "trait_type": "type",
                  value: content.type
                },
              ]
            },
        },
      ];

      const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
      
      console.log('responseUrlIpf', response);
      const responseUrl = response.raw
      const path = responseUrl[0].path
      const hash = removeBaseUrl(path);
      return { path, hash}
    }else{
      const base64Data = await readAsBase64(content)  as string;


      const fileUpload = [
        {
          path: `${ethAddress}/${contentName}`,
          content: base64Data.toString()
        }
      ]

      const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: fileUpload
      });

      const responseUrl = response.raw
      const path = responseUrl[0].path
      const hash = removeBaseUrl(path);
      console.log('responseUrl :', responseUrl);
      return { path, hash}
    }
  }catch(error: any){
    console.error("errorIPFS", error)
  }

}
export default useSetIpfsUploadFolder;