import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Image from "../../assets/placeholder.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import TeamMember from "./team/TeamMember";
import { teams_content } from "../../data/content";
import styles from "./About.module.css";

SwiperCore.use([Pagination]);

const About = () => {
    return (
        <section className="section-spacer" id="about">
            <Container>
                <h2 className="title title-black">About us</h2>
                <Row>
                    <Col md={6} sm={12} className="pe-5">
                        <img src={Image} alt="images" className="mt-5" />
                    </Col>
                    <Col md={6} sm={12} className="mt-5 px-lg-4">
                        <h3>Property development</h3>
                        <p className="mt-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Reiciendis, veniam impedit explicabo quisquam
                            dolor debitis soluta aut eum rerum veritatis
                            necessitatibus totam voluptatibus omnis facere enim
                            libero rem, velit beatae?
                        </p>
                    </Col>
                </Row>                      
                <Row className="mt-5">
                    <h3 className="title title-black">Team member</h3>
                    <Col md={12} className="mt-5">
                        <Swiper
                            spaceBetween={30}
                            loop={false}                                                   
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            className={styles.slider}
                            breakpoints={{
                                600: {                                   
                                    slidesPerView: 1
                                },
                                768: {                                    
                                    slidesPerView: 2
                                },
                                992: {
                                    slidesPerView: 3
                                }
                            }}
                        >
                            {teams_content.map((member, index) => {
                                return (
                                    <SwiperSlide key={index} className={styles.slide}>
                                        <TeamMember member={member} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>                    
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default About;
