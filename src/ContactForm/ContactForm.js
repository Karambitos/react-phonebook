import React, { Component } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from '../ContactForm/ContactForm.module.css'

export default class ContactForm extends Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <SectionTitle title='Contacts'>
                <ul className={styles.contactList}>
                    {contacts.map(({ id, name, number }) => {
                        return (
                            <li className={styles.contactItem} key={id}>
                                <p>{name}</p>
                                <p>{number}</p>
                            </li>
                        )
                    })}
                </ul>
            </SectionTitle>
        )
    }
}



// export default function ContactForm({ contacts }) {
//     return (
//         <SectionTitle title='Contacts'>
//             <ul className="">
//                 {contacts.map(({ id, name, number }) => {
//                     return (
//                         <li className="" key={id}>
//                             <p>{name}</p>
//                             <p>{number}</p>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </SectionTitle>
//     )
// }


