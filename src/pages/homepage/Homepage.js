import React from "react";
import Banner from "../../components/banner/Banner";
import About from '../../components/aboutUs/About';
import NumberRow from "../../components/numberRow/NumberRow";
import Service from "../../components/service/Service";
import Projects from "../../components/projects/Projects";
import './Homepage.module.css';

const Homepage = () => {
    return <main>
        <Banner />        
        <NumberRow />        
        <About />
        <Service />
        <Projects />        
    </main>;
};
export default Homepage;
