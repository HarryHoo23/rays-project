import React, { useEffect, useState } from "react";
import { AnimateGroup, Animate } from "react-simple-animate";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Banner.module.css";

const Banner = () => {
    const title = "Lorem ipsum dolor sit amet consectetur";
    const items = title.split(" ");
    const [play, setPlay] = useState(false);    

    useEffect(() => {
        setPlay(true);
    }, []);

    return (
        <div className={styles.banner}>
            <Container fluid>
                <Row className="px-4 offset-xl-2 offset-md-1">
                    <Col md={6} lg={6} sm={12}>                        
                        <div className="d-lg-block d-none" style={{marginLeft: '-10px'}}>
                            <AnimateGroup play={play}>
                                {items.map((item, index) => {
                                    return (
                                        <Animate
                                            key={item}
                                            sequenceIndex={index}
                                            end={{
                                                opacity: 1,
                                                display: "inline-block",                                            
                                                transform: "translateY(0)",
                                            }}
                                            start={{
                                                opacity: 0,
                                                transform: "translateY(-10px)",
                                            }} >                                            
                                            <h1 className={`${styles.title}`}  dangerouslySetInnerHTML={{__html: `${item.replace("", '&nbsp')}`}} />                                                                               
                                        </Animate>
                                    );
                                })}
                            </AnimateGroup>
                                            
                        </div>
                        <div className="d-block d-lg-none">
                            <h1 className={`${styles.title} title`}>
                                {title}
                            </h1>
                        </div>
                        <p className={`${styles.text} mt-5`}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Esse totam voluptatem consequatur voluptatum
                            aliquam inventore dicta illo obcaecati rerum minus
                            aperiam ratione, dignissimos et suscipit. Nisi
                            laborum omnis inventore facilis.
                        </p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};
export default Banner;
