import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./Project.module.css";
import { Link } from "react-router-dom";

const Project = ({project}) => {
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={project.images[0]} />
            <Card.Body className="p-4">
                <Card.Title className={`mb-3 title ${styles.title}`}>{project.title}</Card.Title>
                <Card.Text className={`mb-3 ${styles.desc}`}>
                    {project.description[0].substring(0, 100)}...
                </Card.Text>
                <Link to={`/project/${project.id}`}>
                    <Button className={styles.btn}>Read more</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};
export default Project;
