import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context/app_context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/elements/Loader/Loader";
import Homepage from "./pages/homepage/Homepage";
import ProjectPage from "./pages/projectPage/ProjectPage";
import Navbar from "./components/header&footer/Navbar";
import Footer from "./components/header&footer/footer/Footer";

function App() {    

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);


        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Router>
            <Navbar offset={offset} />
            <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/project/:id" element={<ProjectPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
