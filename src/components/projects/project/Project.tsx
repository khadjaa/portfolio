import React from 'react';
import styles from './Project.module.css'

type ProjectPropsType = {
    title: string
    description: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={styles.project}>
            <img src="https://ru.react.js.org/logo-og.png" alt="project"/>
            <h3>{props.title}</h3>
            <span className={styles.description}>
                {props.description}
            </span>
        </div>
    );
};