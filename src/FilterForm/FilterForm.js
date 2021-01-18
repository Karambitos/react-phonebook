import React from 'react'
import styles from '../FilterForm/FilterForm.module.css';


export default function FilterForm({ value, onChange }) {
    return (
        <label className={styles.label}>Find contacts by name
            <input className={styles.input} type="text" value={value} onChange={onChange} />
        </label>
    )
}

