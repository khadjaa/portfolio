import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imgContainer}>
                <a className={styles.projectButton}>Go</a>
            </div>
            <h3>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
};