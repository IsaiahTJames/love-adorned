import Navbar from "../components/navbar";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Love Adorned</title>
        </head>
        <body>
        <Navbar />
        <main>{children}</main>
        </body>
        </html>
    );
}
