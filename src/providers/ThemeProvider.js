"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") ||
                (window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark");
        }
        return "light";
    });

    useEffect(() => {
        if (typeof document !== "undefined") {
            const root = document.documentElement;
            if (theme === "dark") {
                root.style.setProperty("--background", "#000000");
                root.style.setProperty("--foreground", "#ededed");
            } else {
                root.style.setProperty("--background", "#efefef");
                root.style.setProperty("--foreground", "#171717");
            }
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
