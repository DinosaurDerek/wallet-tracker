import Providers from '@/providers/providers';
import "@/app/globals.css";
import ThemeToggle from "@/components/ThemeToggle";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <Providers>
            <header className="flex flex-row-reverse m-4">
                <ThemeToggle/>
            </header>
            {children}
        </Providers>
        </body>
        </html>
    );
}
