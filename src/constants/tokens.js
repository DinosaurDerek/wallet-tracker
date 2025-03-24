const ETHERIUM_TOKENS = [
    { address: undefined, symbol: "ETH", decimals: 18 },
    { address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', symbol: 'USDC', decimals: 6 },
    { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', symbol: 'USDT', decimals: 6 },
    { address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', symbol: 'WETH', decimals: 18 },
];

const BSC_TOKENS = [
    { address: undefined, symbol: "BNB", decimals: 18 },
    { address: '0xe9e7cea3dedca5984780bafc599bd69add087d56', symbol: 'BUSD', decimals: 18 },
    { address: '0x55d398326f99059ff775485246999027b3197955', symbol: 'USDT', decimals: 18 },
];

const POLYGON_TOKENS = [
    { address: undefined, symbol: "POL", decimals: 18 },
    { address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', symbol: 'USDC', decimals: 6 },
];

const BASE_TOKENS = [
    { address: undefined, symbol: "ETH", decimals: 18 },
    { address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', symbol: 'USDC', decimals: 6 },
];

const SEPOLIA_TOKENS = [
    { address: undefined, symbol: "ETH", decimals: 18 },
    { address: '0x779877A7B0D9E8603169DdbD7836e478b4624789', symbol: 'LINK', decimals: 18 },
];

export const TOKENS_BY_CHAIN = {
    1: ETHERIUM_TOKENS,
    56: BSC_TOKENS,
    137: POLYGON_TOKENS,
    8453: BASE_TOKENS,
    11155111: SEPOLIA_TOKENS,
};

