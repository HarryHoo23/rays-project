import React from "react";
import Banner from "../banner/Banner";
import About from '../aboutUs/About';
import './Homepage.module.css';

const Homepage = () => {

    return <div>
        <Banner />
        <About />
        <div className="vh-100"></div>
    </div>;
};
export default Homepage;
