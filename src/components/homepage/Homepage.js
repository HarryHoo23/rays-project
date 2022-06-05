import React from "react";
import Banner from "../banner/Banner";
import { Container } from 'react-bootstrap';
import About from '../aboutUs/About';
import NumberRow from "../numberRow/NumberRow";
import Service from "../service/Service";
import Projects from "../projects/Projects";
import './Homepage.module.css';

const Homepage = () => {

    return <div>
        <Banner />
        <Container className="mt-5 mb-5">
            <NumberRow />
        </Container>
        <About />
        <Service />
        <Projects />
        <div className="vh-100"></div>
    </div>;
};
export default Homepage;
