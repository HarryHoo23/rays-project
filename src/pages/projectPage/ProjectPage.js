import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Col, Container, Row } from "react-bootstrap";
// import { SwiperSlide } from 'swiper/react';
// import Swiper, { Navigation, Pagination, EffectCube } from "swiper";
// import { projects } from "../../data/projects";
import styles from "./ProjectPage.module.css";

const ProjectPage = () => {
    // const [project, setProject] = useState({});
    // const { id } = useParams();

    // useEffect(() => {
    //     const newProject = projects.find((project) => project.id === parseInt(id));
    //     setProject(newProject);
    // }, []);

    // if (Object.keys(project).length > 0) {
    //     return (
    //         <section className={styles.section}>
    //             <Container className={`section-spacer ${styles.container}`}>
    //                 <div className="vh-100"></div>
    //                 <Row>
    //                     <Col lg={7} md={6} className={styles["swiper-container"]}>
    //                         <Swiper
    //                             effect="cube"
    //                             grabCursor={true}                                
    //                             cubeEffect={{
    //                                 shadow: true,
    //                                 slideShadows: true,
    //                                 shadowOffset: 20,
    //                                 shadowScale: 0.94,
    //                             }}
    //                             pagination={true}
    //                             modules={[EffectCube, Pagination]}
    //                             className={styles.mySwiper}
    //                         >
    //                             {project.images.map((image, index) => {
    //                                 return (
    //                                     <SwiperSlide key={index}>
    //                                         <img className={styles.image} src={image} alt="images-cube" />
    //                                     </SwiperSlide>
    //                                 )
    //                             })}
    //                         </Swiper>
    //                     </Col>
    //                     <Col lg={5} md={6}>
    //                         {project.title}
    //                     </Col>
    //                 </Row>
    //             </Container>
    //         </section>
    //     );
    // }

    return null;

};

export default ProjectPage;
