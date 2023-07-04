const generateNFTMetadata = () => {
  // Generar valores aleatorios para todas las propiedades del objeto metadata
  let energy = Math.floor(Math.random() * 91 + 10);
  let force = Math.floor(Math.random() * 91 + 10);
  let impact = Math.floor(Math.random() * 91 + 10);
  let sustainability = Math.floor(Math.random() * 91 + 10);
  let valueNft = Math.floor(Math.random() * 91 + 10);
  let rarity = Math.floor(Math.random() * 91 + 10);
  let type = "CommonEggs";

  // Crear el objeto metadata con los valores aleatorios
  let metadata = {
    energy: energy,
    force: force,
    impact: impact,
    sustainability: sustainability,
    valueNft: valueNft,
    rarity: rarity,
    type: type
  };

  // Retornar el objeto metadata
  return metadata;
}

const useGenerateNFT = async () => {

  try{
  // Inicializar variables con valores aleatorios entre 10 y 100
  let energy = Math.floor(Math.random() * 91 + 10);
  let force = Math.floor(Math.random() * 91 + 10);
  let impact = Math.floor(Math.random() * 51 + 50);
  let sustainability = Math.floor(Math.random() * 51 + 50);
  let valueNft = Math.floor(Math.random() * 91 + 10);
  let rarity = Math.floor(Math.random() * 91 + 10);

  // Comprobar que cumplen con las reglas de impacto y sostenibilidad
  if (impact < 50 || sustainability < 50) {
    return generateNFTMetadata();
  }

  // Calcular la media de los valores
  let mean = (energy + force + impact + sustainability + valueNft + rarity) / 6;

  // Comprobar si cumple con las reglas de media
  if (mean < 55) {
    // No cumple con la regla del 40%
    return generateNFTMetadata();
  }

  // Asignar tipo de NFT
  let type = "CommonEggs";
  if ((energy >= 50) && (energy <= 60 )&& (valueNft >= 50) && (valueNft <= 60)) {
    // Cumple con la regla del 20%
    type = "UncommonEggs";
  } else if ((energy >= 61) && (energy <= 75) && (force >= 61) && (force <= 75) && (rarity >= 61) && (rarity <= 75) && (valueNft >= 61) && ( valueNft <= 75)) {
    // Cumple con la regla del 10%
    type = "RareEggs";
  } else if ( (energy >= 76) && (energy <= 85 ) && (force >= 76) && (force <= 85) && (rarity >= 61) && (rarity <= 75) &&( valueNft >= 76) && (valueNft <= 85)) {
    // Cumple con la regla del 5%
    type = "LegendaryEggs";
  } else if ((energy >= 95) && (energy <= 100) && (force >= 95) && (force <= 100) && (rarity >= 95) && (rarity <= 98) && (valueNft === 100)) {
    // Cumple con la regla del 1%
    type = "EasterEgg";
  }

  let metadata = {
    energy: energy,
    force: force,
    impact: impact,
    sustainability: sustainability,
    valueNft: valueNft,
    rarity: rarity,
    
    type: type
  };

  return metadata;

  }catch(error){

    console.log(error);

  }
}

export default useGenerateNFT