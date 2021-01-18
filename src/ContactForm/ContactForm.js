import React, { Component } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import FilterForm from '../FilterForm/FilterForm'

import styles from '../ContactForm/ContactForm.module.css'

export default class ContactForm extends Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <SectionTitle title='Contacts'>
                {this.props.children}
                <ul className={styles.contactList}>
                    {contacts.map(({ id, name, number }) => {
                        return (
                            <li className={styles.contactItem} key={id}>
                                <p>{name}</p>
                                <p>{number}</p>
                                <button onClick={() => this.props.onDeliteItem(id)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </SectionTitle>
        )
    }
}

