// hardhat.config.js
import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-verify'
import dotenv from 'dotenv'

dotenv.config()

const { PRIVATE_KEY, ETHERSCAN_API_KEY, SEPOLIA_RPC_URL, BTCS_API_KEY } = process.env

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : []
    },
    testnet: {
      url: 'https://rpc.test2.btcs.network',
      accounts: PRIVATE_KEY ? [`0x${PRIVATE_KEY}`] : [],
      chainId: 1114,
      gasPrice: 1000000000
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY || '',
      testnet: BTCS_API_KEY || '' // Add API key for testnet
    },
    customChains: [
      {
        network: 'testnet',
        chainId: 1114,
        urls: {
          apiURL: 'https://api.test2.btcs.network/api',
          browserURL: 'https://scan.test2.btcs.network/'
        }
      }
    ]
  }
}

export default config
