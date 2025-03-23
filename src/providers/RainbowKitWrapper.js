"use client";

import { darkTheme, lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import { useTheme } from "@/providers/ThemeProvider";

export default function RainbowKitWrapper({ children }) {
    const { theme } = useTheme();

    return (
        <RainbowKitProvider theme={theme === "dark" ? darkTheme() : lightTheme()}>
            {children}
        </RainbowKitProvider>
    );
}
