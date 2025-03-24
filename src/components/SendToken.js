import React, { useState } from 'react';
import { useAccount, useSendTransaction, useWriteContract } from 'wagmi';
import { parseUnits } from 'viem';

import { useTheme } from "@/providers/ThemeProvider";
import { TOKENS_BY_CHAIN } from "@/constants/tokens";

function SendTransactionForm() {
    const { theme, setTheme } = useTheme();
    const { chainId } = useAccount();
    const tokens = TOKENS_BY_CHAIN[chainId];
    const [selectedToken, setSelectedToken] = useState(tokens[0]);
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const { writeContractAsync } = useWriteContract();
    const { sendTransactionAsync } = useSendTransaction();

    const inputStyles = `p-2 ${theme === "dark" ? "bg-zinc-800 text-zinc-50" : "bg-white text-zinc-900"} rounded-xl`;

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setIsSuccessful(false);

        try {
            if (selectedToken.address === undefined) {
                // Send native token
                await sendTransactionAsync({
                    to: recipient,
                    value: parseUnits(amount, selectedToken.decimals)
                });
                setIsSuccessful(true);
            } else {
                // Send ERC-20 token
                await writeContractAsync({
                    address: selectedToken.address,
                    abi: [
                        {
                            name: 'transfer',
                            type: 'function',
                            stateMutability: 'nonpayable',
                            inputs: [
                                { name: 'recipient', type: 'address' },
                                { name: 'amount', type: 'uint256' },
                            ],
                            outputs: [{ name: '', type: 'bool' }],
                        },
                    ],
                    functionName: 'transfer',
                    args: [recipient, parseUnits(amount, selectedToken.decimals)],
                });
                setIsSuccessful(true);
            }
        } catch (err) {
            if (['UserRejectedRequestError', 'ContractFunctionExecutionError'].includes(err.name)) {
                setError('Transaction rejected by user.');
            } else {
                setError(`Error: ${err.message || 'Unknown error occurred.'}`);
            }
        }
    };

    return (
        <form className="flex flex-wrap gap-2 justify-center" onSubmit={handleSubmit}>
            <span className={inputStyles}>
                <select
                    value={selectedToken.address}
                    onChange={(e) => setSelectedToken(tokens.find((t) => t.address === e.target.value) || tokens[0])}
                >
                    {tokens.map((token) => (
                        <option key={token.address || token.symbol} value={token.address}>
                            {token.symbol}
                        </option>
                    ))}
                </select>
            </span>
            <span className={inputStyles}>
                <input
                    type="text"
                    value={recipient}
                    className="placeholder-zinc-400"
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="Recipient address"
                    required
                />
            </span>
            <span className={inputStyles}>
                <input
                    type="number"
                    step="0.000001"
                    value={amount}
                    className="placeholder-zinc-400"
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder={`Amount (${selectedToken.symbol})`}
                    required
                />
            </span>
            <button className={inputStyles} type="submit">Send</button>
            {error && <div className="text-red-600">{error}</div>}
            {isSuccessful && <div className="text-green-600">Sent successfully!</div>}
        </form>
    );
}

export default SendTransactionForm;
