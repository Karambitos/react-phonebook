import React, { Component } from 'react'
import Container from './Container/Container'
import PhonebookForm from './PhonebookForm/PhonebookForm'
import ContactForm from './ContactForm/ContactForm'
import { v4 as uuidv4 } from 'uuid';



export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: ''
  }

  onSubmitHandler = data => {

    const contact = {
      id: uuidv4(),
      name: data.nameValue,
      number: data.numberValue,
    }
    this.setState(prevState => {
      return {
        contacts: [contact, ...prevState.contacts],
      }
    })
  }
  render() {
    return (
      <Container>
        <PhonebookForm onSubmit={this.onSubmitHandler} />
        <ContactForm contacts={this.state.contacts} />
      </Container>
    )
  }
}
