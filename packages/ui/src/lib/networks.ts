import { contractNetwork } from '@/config'
import type { NetworkInfo } from '@/types'

declare const MAINNET_RPC: string
declare const GNOSIS_RPC: string
declare const POLYGON_RPC: string
declare const MUMBAI_RPC: string
declare const LOCAL_RPC: string

// Using Object.keys(NETWORKS) results in infinite recursion
const networks = [
  'mainnet', 'gnosis', 'polygon', 'mumbai', 'localhost'
]

export const NETWORKS: NetworkInfo = {
  mainnet: {
    chainId: 1,
    name: 'Ethereum Mainnet',
    label: 'Ethereum',
    symbol: 'ETH',
    explorer: 'https://etherscan.io',
    rpc: (typeof MAINNET_RPC !== 'undefined' ? (
      MAINNET_RPC
    ) : (
      'https://eth.public-rpc.com/'
    )),
  },
  gnosis: {
    chainId: 0x64,
    name: 'Gnosis Chain',
    label: 'Gnosis',
    symbol: 'xDAI',
    explorer: 'https://blockscout.com/xdai/mainnet',
    rpc: (typeof GNOSIS_RPC !== 'undefined' ? (
      GNOSIS_RPC
    ) : (
      'https://rpc.gnosischain.com/'
    )),
  },
  polygon: {
    chainId: 137,
    name: 'Polygon',
    label: 'Polygon',
    symbol: 'MATIC',
    explorer: 'https://polygonscan.com',
    rpc: (typeof POLYGON_RPC !== 'undefined' ? (
      POLYGON_RPC
    ) : (
      'https://polygon-rpc.com'
    )),
  },
  mumbai: {
    chainId: 80001,
    name: 'Polygon’s Mumbai Testnet',
    label: 'Mumbai',
    symbol: '𝙼𝙰𝚃𝙸𝙲',
    explorer: 'https://mumbai.polygonscan.com',
    rpc: (typeof MUMBAI_RPC !== 'undefined' ? (
      MUMBAI_RPC
    ) : (
      'https://rpc.ankr.com/polygon_mumbai'
      ?? 'https://rpc-mumbai.matic.today'
    )),
  },
  localhost: {
    chainId: 0x7a69,
    name: 'Ganache',
    label: 'Ganache',
    symbol: '🄴🅃🄷',
    explorer: null,
    rpc: (typeof LOCAL_RPC !== 'undefined' ? (
      LOCAL_RPC
    ) : (
      'http://127.0.0.1:8545'
    )),
  },
  get contract() {
    let net = this[contractNetwork]
    if(!net) {
      networks.forEach((name) => {
        if(contractNetwork.toLowerCase().includes(name)) {
          net = this[name]
        }
      })
    }
    return net
  },
}
