import React from 'react';
import styles from './Work.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Work = () => {

    return (
        <div className={styles.workBlock}>
            <div className={`${styleContainer.container} ${styles.workContainer}`}>
                <h2 className={styles.workTitle}>I am considering options for remote work</h2>
                <button>hire me</button>
            </div>
        </div>
    );
};