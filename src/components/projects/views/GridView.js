import React from "react";
import styles from "./GridView.module.css";
import { projects } from "../../../data/projects";
import Project from "../project/Project";

const GridView = () => {
    return (
        <div className={styles["service-row"]}>
            {projects.map((item) => {
                return <Project key={item.id} project={item} />;
            })}
        </div>
    );
};
export default GridView;
