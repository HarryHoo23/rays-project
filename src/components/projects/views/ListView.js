import React from "react";
import styles from "./ListView.module.css";
import { Link } from "react-router-dom";
import { projects } from "../../../data/projects";

const ListView = () => {
    return (
        <div className={`mt-5`}>
            {projects.map((item) => {
                return (
                    <article key={item.id} className={styles.project}>
                        <img src={item.image} alt={item.title} />
                        <div className={styles.detail}>
                            <h4 className="title">{item.title}</h4>                            
                            <p>{item.description.substring(0, 200)}...</p>
                            <Link to={`/products`} className={styles.btn}>
                                Details
                            </Link>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};
export default ListView;
