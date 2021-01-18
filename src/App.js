import React, { Component } from 'react'
import Container from './Container/Container'
import PhonebookForm from './PhonebookForm/PhonebookForm'
import ContactForm from './ContactForm/ContactForm'
import FilterForm from './FilterForm/FilterForm'
import { v4 as uuidv4 } from 'uuid';



export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  filterOnChange = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter))
  }

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.getFilterContacts();

    return (
      <Container>
        <PhonebookForm onSubmit={this.onSubmitHandler} contacts={contacts} />
        <ContactForm contacts={filterContacts} onDeliteItem={this.deleteContact} >
          <FilterForm value={filter} onChange={this.filterOnChange} />
        </ContactForm>
      </Container>
    )
  }
}
