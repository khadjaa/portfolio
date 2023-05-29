import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h2 className={styles.footerTitle}>Islam Ismoilov</h2>
                <div className={styles.contacts}>
                    <a href="#">git</a>
                    <a href="#">Link</a>
                    <a href="#">Tg</a>
                    <a href="#">Vk</a>
                </div>
                <span>
                   © 2023 All rights reserved
                </span>
            </div>
        </div>
    );
};