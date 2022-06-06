import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Service.module.css";

const Service = () => {
    return <section className={`section-spacer ${styles.services}`} id="services">
        <Container>
            <h2 className="title title-white">Services</h2>
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
    </section>;
};
export default Service;
