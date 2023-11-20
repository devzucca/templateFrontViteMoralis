//Moralis Access
const serverUrl: string = import.meta.env.VITE_MORALIS_SERVER_URL;
const appId: string = import.meta.env.VITE_MORALIS_APP_ID;
const moralisApiKey: string = import.meta.env.VITE_MORALIS_API_KEY;
const masterKey: string = import.meta.env.VITE_MORALIS_MASTER_KEY;
const urlProvider: string = import.meta.env.VITE_ALCHEMY_URL_PROVIDER;
const apiAlchemy: string = import.meta.env.VITE_ALCHEMY_PRIVATE_API_KEY;

//Contracts Access
const contracts: {
  token: string;
  auction: string;
  collection: string;
} = {
  token:
    /* "0x34b60594ddd22f661fc83ec4b54e183ddc871319" */ "0x11142365DDbc92C3547b8A074289409B5432CA8b",
  auction: "0xE76Bc6E52C2Db6054C4E63f2C9e72ADE240AC3DE",
  collection: "0x1C7d04C4DDEE4d13c31E800568039AcEabDCc3C8",
};

const chainID: {
  mainNet: string;
  testNet: string;
} = {
  mainNet: import.meta.env.VITE_CHAIN_ID_MAINNET,
  testNet: import.meta.env.VITE_CHAIN_ID_TESTNET,
};
console.log("mainNet", chainID.mainNet);
console.log("testNet", chainID.testNet);
//creator access
const creator: {
  owner: string;
  artist: string;
} = {
  owner: "0xb0A7c00EA503AdbdFE0071bdd9eB6Fbb18e7C6B5",
  artist: "0xb0A7c00EA503AdbdFE0071bdd9eB6Fbb18e7C6B5",
};

//Auth Access
const auth: {
  chainId: number;
  chainName: string;
  currencyName: string;
  currencySymbol: string;
  currencyContract: string;
  rpcUrl: string;
  blockExplorerUrl: string;
  token: string;
} = {
  chainId: 80001, //137,
  chainName: "Polygon",
  currencyName: "MATIC",
  currencySymbol: "MATIC",
  currencyContract:
    "0xCC42724C6683B7E57334c4E856f4c9965ED682bD" /* "0x11142365DDbc92C3547b8A074289409B5432CA8b" */,
  rpcUrl: "https://rpc-mumbai.maticvigil.com/", //"https://polygon-rpc.com/",
  blockExplorerUrl: "https://mumbai.polygonscan.com/", //"https://polygonscan.com/",
  token: "KNRT" /* "KNRT" */,
};

export {
  serverUrl,
  appId,
  masterKey,
  moralisApiKey,
  contracts,
  chainID,
  creator,
  auth,
  apiAlchemy,
  urlProvider,
};
