import React, { Component } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from '../PhonebookForm/PhonebookForm.module.css';

import shortid from 'shortid'


export default class PhonebookForm extends Component {
    state = {
        nameValue: '',
        numberValue: '',
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleInputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const includeName = this.props.contacts.some(contact => contact.name === this.state.nameValue);

        if (includeName) {
            alert(this.state.nameValue + ' is already in contacts')
        } else {
            this.props.onSubmit(this.state);
            this.setState({ nameValue: '', numberValue: '', })
        }
    };

    reset = () => {
        this.setState({ nameValue: '', numberValue: '', })
    };

    render() {
        const { nameValue, numberValue } = this.state;
        return (
            <SectionTitle title='Phonebook'>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <label className={styles.formLabel} htmlFor={this.nameInputId}>Name</label>
                    <input className={styles.formInput} type="text" name="nameValue"
                        id={this.nameInputId}
                        value={nameValue}
                        onChange={this.handleInputChange} />
                    <label className={styles.formLabel} htmlFor={this.numberInputId}>Number</label>
                    <input className={styles.formInput} type="tel" name="numberValue"
                        id={this.numberInputId}
                        value={numberValue}
                        onChange={this.handleInputChange} />
                    <button className={styles.formBtn} type="submit" disabled={
                        (!(this.state.nameValue && this.state.numberValue))
                    }>Add contact</button>
                </form>
            </SectionTitle>
        )
    }
}
