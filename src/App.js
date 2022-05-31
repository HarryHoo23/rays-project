import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context/app_context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/elements/Loader/Loader";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/header&footer/Navbar";

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
            </Routes>
        </Router>
    );
}

export default App;
