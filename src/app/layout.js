import Providers from '@/providers/providers';
import "@/app/globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
