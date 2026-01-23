import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Generate from "./pages/Generate";
import MyGenration from "./pages/MyGenration";
import YtPreview from "./pages/YtPreview";
 
import Login from "./components/Login";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                 <Route path="/generate" element={<Generate />} />
                 <Route path="/my-generation" element={<MyGenration />} />
                 <Route path="/preview" element={<YtPreview   />} />
                  <Route path="/login" element={<Login   />} />

            </Routes>
            <Footer />
        </>
    );
}