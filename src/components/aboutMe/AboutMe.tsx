import React from 'react';
import styles from './AboutMe.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const AboutMe = () => {
    return (
        <div className={styles.mainInfo}>
            <div className={styleContainer.container}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am Islam Ismoilov</h1>
                    <p>A Frontend Developer</p>
                </div>
                <div className={styles.photo}>

                </div>
            </div>
        </div>
    );
};

