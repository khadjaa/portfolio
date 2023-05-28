import React from 'react';
import styles from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Project} from "./project/Project";

export const Projects = () => {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores autem debitis dignissimos distinctio ex harum illum, ipsum libero ratione rem saepe'

    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.projectsTitle}>My Projects</h2>
                <div className={styles.projects}>
                    <Project title={'SELF-ORDER'} description={lorem}/>
                    <Project title={'TODO'} description={lorem}/>
                </div>
            </div>
        </div>
    );
};