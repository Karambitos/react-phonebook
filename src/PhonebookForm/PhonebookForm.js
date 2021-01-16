import React, { Component } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from '../PhonebookForm/PhonebookForm.module.css';

import shortid from 'shortid'


export default class PhonebookForm extends Component {
    state = {
        nameValue: '',
        numberValue: '',
        // disabled: true,
    };

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleInputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
        console.log(!(this.state.nameValue || this.state.numberValue));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        // this.setState({ nameValue: '', numberValue: '', })
        // console.log(this.reset());
        // this.reset();
    };

    reset = () => {
        this.setState({ nameValue: '', numberValue: '', })
    };

    render() {
        return (
            <SectionTitle title='Phonebook'>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <label className={styles.formLabel} htmlFor={this.nameInputId}>Name</label>
                    <input className={styles.formInput} type="text" name="nameValue"
                        id={this.nameInputId}
                        value={this.nameValue}
                        onChange={this.handleInputChange} />
                    <label className={styles.formLabel} htmlFor={this.numberInputId}>Number</label>
                    <input className={styles.formInput} type="tel" name="numberValue"
                        id={this.numberInputId}
                        value={this.numberValue}
                        onChange={this.handleInputChange} />
                    <button className={styles.formBtn} type="submit" disabled={
                        (!(this.state.nameValue && this.state.numberValue))
                    }>Add contact</button>
                </form>
            </SectionTitle>
        )
    }
}
