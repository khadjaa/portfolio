import React from 'react';
import styles from './Nav.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Navigation = () => {
    return (
            <div className={`${styleContainer.container} ${styles.navContainer}`}>
                <div className={styles.nav}>
                    <a href="#">Home</a>
                    <a href="#">Skills</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </div>
            </div>
    );
};