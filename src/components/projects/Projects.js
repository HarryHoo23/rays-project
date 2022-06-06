import React from "react";
import Project from "./project/Project";
import styles from "./Projects.module.css";
import { Row, Container } from "react-bootstrap";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useGlobalContext } from '../../context/app_context';
import { projects } from "../../data/projects";
import GridView from './views/GridView';
import ListView from './views/ListView';

const Projects = () => {
    const { gridView, handleSetGridView, handleSetListView } = useGlobalContext();

    return (
        <section className="section-spacer" id="projects">
            <Container>
                <h2 className="title title-black">Our projects</h2>
                <section className={`mt-5 ${styles.row}`}>                    
                    <div className={styles["btn-container"]}>
                        <button
                            type="button"
                            className={`${gridView ? `${styles.active}` : null} ${styles.btn}`}
                            onClick={handleSetGridView}
                        >
                            <BsFillGridFill />
                        </button>
                        <button
                            type="button"
                            className={`${!gridView ? `${styles.active}` : null} ${styles.btn}`}
                            onClick={handleSetListView}
                        >
                            <BsList />
                        </button>
                    </div>
                    <p className="m-0">Total projects: {projects.length}</p>
                    <hr />
                    <div>
                        <p className="m-0">how are you</p>
                    </div>
                </section>
                <Row>
                    {gridView ? <GridView /> : <ListView />}
                </Row>
            </Container>
        </section>
    );
};
export default Projects;
