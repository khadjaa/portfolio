import React from 'react';
import styles from './Header.module.css'
import {Navigation} from "../nav/Nav";

export const Header = () => {
    return (
        <div className={styles.header}>
            <Navigation/>
        </div>
    );
};