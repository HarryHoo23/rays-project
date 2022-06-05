import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = ({project}) => {
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title className={`mb-3 title ${styles.title}`}>{project.title}</Card.Title>
                <Card.Text className={`mb-3 ${styles.desc}`}>
                    {project.description.substring(0, 100)}...
                </Card.Text>
                <Link to="/project">
                    <Button className={styles.btn}>Read more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};
export default Project;
