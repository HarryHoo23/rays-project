import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Service.module.css";
import { Parallax } from "react-parallax";

const Service = () => {
    return (
        <Parallax blur={1} bgImage="https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" bgImageAlt="the cat" strength={100}>
            <div className={styles.overlay}></div>
            <section className={`section-spacer ${styles.services}`} id="services">
                <Container>
                    <h2 className="title title-white mb-5">Services</h2>
                    <Row className={styles.row}>
                        <Col md={6}>
                            <p className={styles.paragraph}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente expedita quam voluptatum ipsum voluptate iure unde omnis, dolore suscipit itaque odit! Ut voluptate odio temporibus placeat unde! Aspernatur, corrupti magnam.
                            </p>
                        </Col>
                        <Col md={6}>
                            <p className={styles.paragraph}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit tempore tempora consequatur doloremque optio dicta porro nesciunt facere, eveniet voluptates quam dignissimos odio a blanditiis? Eligendi incidunt veniam qui.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Parallax>
    );
};
export default Service;
