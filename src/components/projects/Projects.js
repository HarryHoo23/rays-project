import React from "react";
import Project from "./project/Project";
import styles from './Projects.module.css';
import { Row, Col, Container } from "react-bootstrap";

const Projects = () => {
    return <section className="section-spacer">
        <Container>
            <h2 className="title">
                Our projects
            </h2>
            <Row className={styles['service-row']}>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
                <div>how are you project</div>
            </Row>
        </Container>
    </section>;
};
export default Projects;
