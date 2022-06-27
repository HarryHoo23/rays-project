import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCube, Navigation } from "swiper";
import { projects } from "../../data/projects";
import styles from "./ProjectPage.module.css";

SwiperCore.use([Pagination, EffectCube, Navigation]);

const ProjectPage = () => {
    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const newProject = projects.find((project) => project.id === parseInt(id));
        setProject(newProject);
        document.documentElement.className = "project";
    }, []);

    if (Object.keys(project).length > 0) {
        return (
            <section className={styles.section}>
                <Container className={`section-spacer ${styles.container}`}>                    
                    <Row>
                        <Col lg={7} md={12} className={styles["swiper-container"]}>
                            <Swiper
                                loop
                                effect="cube"
                                grabCursor={true} 
                                navigation
                                cubeEffect={{
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}                                                     
                                pagination={{clickable: true}}                                
                                className={styles.mySwiper}
                            >
                                {project.images.map((image, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <img className={styles.image} src={image} alt="images-cube" />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </Col>
                        <Col lg={5} md={12} className="mt-5 mt-lg-0">
                            <div className={styles.project}>
                                <h3 className="bold">
                                    {project.title}
                                </h3>
                                <div className={`${styles.desc} mt-5`}>
                                    {project.description.map((item, index) => {
                                        return (
                                            <p key={index}>{item}</p>
                                        )
                                    })}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }

    return null;

};

export default ProjectPage;
