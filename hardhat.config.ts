import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
// import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    // bsctest: {
    //   url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    //   accounts: [process.env.PRIV_KEY || ""],
    // },
    linea: {
      url: "https://rpc.linea.build",
      chainId: 59144,
      accounts: [process.env.PRIV_KEY || ""],
    },
  },
  etherscan: {
    apiKey: {
      // bsctest: process.env.BSC_API_KEY || "",
      linea: process.env.LINEA_API_KEY || "",
    },
    customChains: [
      {
        network: "linea",
        chainId: 59144,
        urls: {
          apiURL: "https://api.lineascan.build/api",
          browserURL: "https://lineascan.build/",
        },
      },
    ],
  },
};

export default config;
