import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../../../logo.svg';
import styles from "./Footer.module.css";

const Footer = () => {
    return <footer id="footer" className={styles.footer}>
        <Container className={styles['footer-container']}>
            <Row className={styles.row}>
                <Col lg={12} sm={12} className="pt-5 mb-lg-5 mb-3">
                    <img src={logo} alt="Logo" />
                </Col>
                <Col lg={6} sm={6}>
                    <h3 className="mb-5 title title-white">Contact us</h3>
                    <img src="https://www.celine.com/on/demandware.static/-/Library-Sites-Celine-SharedLibrary/default/dw49c5cde2/staticpages/QR%20Code%20for%20celine.com_1009.jpg" alt="wechat-code" />
                </Col>
                <Col lg={6} sm={6}>
                    <h3 className="mb-5 title title-white">Social</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                </Col>
            </Row>
        </Container>
        <Container fluid className={styles.copyright}>
            <Row className="p-4">
                <Col md={12} className="text-center">
                    <small>
                        Copyright © Rays Project 2022
                    </small>
                </Col>
            </Row>
        </Container>
    </footer>;
};
export default Footer;
