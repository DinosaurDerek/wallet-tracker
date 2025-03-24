"use client";

import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 box-border shadow-xl rounded-xl ${theme === "dark" ? "bg-zinc-800" : "bg-white"} cursor-pointer transition-all hover:scale-105 min-w-32`}
        >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}