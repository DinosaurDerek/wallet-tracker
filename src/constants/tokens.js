const ETHERIUM_TOKENS = [
    { address: undefined, name: "ETH" },
    { address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', name: 'USDC' },
    { address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', name: 'USDT' },
    { address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', name: 'WETH' },
];

const BSC_TOKENS = [
    { address: undefined, name: "BNB" },
    { address: '0xe9e7cea3dedca5984780bafc599bd69add087d56', name: 'BUSD' },
    { address: '0x55d398326f99059ff775485246999027b3197955', name: 'USDT' },
];

const POLYGON_TOKENS = [
    { address: undefined, name: "POL" },
    { address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359', name: 'USDC' },
];

const BASE_TOKENS = [
    { address: undefined, name: "ETH" },
    { address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', name: 'USDC' },
];

const SEPOLIA_TOKENS = [
    { address: undefined, name: "ETH" },
    { address: '0x779877A7B0D9E8603169DdbD7836e478b4624789', name: 'LINK' },
];

export const TOKENS_BY_CHAIN = {
    1: ETHERIUM_TOKENS,
    56: BSC_TOKENS,
    137: POLYGON_TOKENS,
    8453: BASE_TOKENS,
    11155111: SEPOLIA_TOKENS,
};
