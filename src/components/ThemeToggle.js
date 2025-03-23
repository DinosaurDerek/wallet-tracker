"use client";

import { useTheme } from "@/providers/ThemeProvider";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 box-border shadow-xl rounded-xl ${theme === "dark" ? "bg-zinc-700" : "bg-white"}`}
        >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
}