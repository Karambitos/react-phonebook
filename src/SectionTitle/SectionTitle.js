import React from 'react';
import styles from '../SectionTitle/SectionTitle.module.css';


export default function SectionTitle({ title, children }) {
    return (
        <section className={styles.section} >
            <h2>{title}</h2>
            {children}
        </section>
    )
}
