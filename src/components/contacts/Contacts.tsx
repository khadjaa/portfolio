import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

export const Contacts = () => {

    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.contactsTitle}>Contacts</h2>
                <form action="" className={styles.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name=""></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
);
};