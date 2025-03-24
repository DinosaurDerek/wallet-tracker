# Web3 Wallet Demo

This is a simple Next.js-based Web3 wallet demo showcasing wallet connection, network switching, token balance display,
and token sending across multiple chains using **RainbowKit, Wagmi, and Viem**.

## Features

✅ Connect and disconnect wallets using RainbowKit  
✅ Display wallet balances for supported networks  
✅ Network switching (Ethereum, Base, BSC, Sepolia)  
✅ Send tokens on supported networks

## Tech Stack

- **Next.js** – React framework for optimized frontend development (SSR disabled for compatibility)
- **Tailwind CSS** – Utility-first CSS framework for styling
- **RainbowKit** – Elegant UI for wallet connections
- **Wagmi & Viem** – Web3 libraries for interacting with Ethereum and EVM-compatible chains

## Getting Started

### Prerequisites

Ensure you have **Node.js 18+** and **Yarn** installed.

### Installation

```sh
git clone <repo-url>
cd <project-folder>
yarn install
```

### Running Locally

```sh
yarn dev
```

### Deployment

The project is deployed on Vercel at:

🔗 [Vercel URL](https://wallet-tracker-cle79tyfp-dereks-projects-1fc98dac.vercel.app)

## Future Improvements

🔹 Custom styling for RainbowKit UI  
🔹 Support for more networks (e.g., Solana)  
🔹 Fetch and display past transactions for connected wallets  
🔹 Show estimated gas fees before sending transactions  
🔹 Display the wallet's token balances with the user's local fiat currency.  
🔹 Display the tokens held by the connected wallet, rather than relying on a static list.  
🔹 Improve feedback for failed transactions or connection issues.  
🔹 Enhance the design and responsiveness for a more polished experience.

