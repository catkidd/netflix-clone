import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Component {...pageProps} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
