import { createConfig } from 'wagmi';
import { base, bsc, mainnet, polygon, sepolia } from 'viem/chains';
import { http } from 'viem';

const wagmiConfig = createConfig({
    chains: [mainnet, base, bsc, polygon, sepolia],
    transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
        [bsc.id]: http(),
        [polygon.id]: http(),
        [sepolia.id]: http(),
    },
})

export { wagmiConfig };
