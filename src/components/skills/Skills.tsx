import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {

    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores autem debitis dignissimos distinctio ex harum illum, ipsum libero ratione rem saepe'

    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.styleTitle}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'JS'} description={lorem}/>
                    <Skill title={'React'} description={lorem}/>
                    <Skill title={'CSS'} description={lorem}/>
                </div>
            </div>
        </div>
    );
};