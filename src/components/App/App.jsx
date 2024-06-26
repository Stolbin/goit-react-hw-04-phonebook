import { useState, useEffect } from "react";
import ContactsList from "components/ContactsList";
import Phonebook from "../Phonebook/Phonebook";
import Filter from "components/Filter";
import { nanoid } from "nanoid";
import { Container, BoxPhonebook, BoxContacts } from "./App.styled";
import data from "./data.json";
import SectionTitle from "components/SectionTitle";

const initialContacts = { data };

const App = () => {
  const [filter, setFilter] = useState("");
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? initialContacts
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const checkContact = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (checkContact) {
      alert(`${name} is alreadi in contacts`);
      return;
    }

    setContacts([contact, ...contacts]);
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  return (
    <Container>
      <BoxPhonebook>
        <SectionTitle title="Phonebook">
          <Phonebook onSubmit={addContact} />
        </SectionTitle>
      </BoxPhonebook>
      <BoxContacts>
        <SectionTitle title="Contacts">
          <Filter value={filter} name="filter" onChange={changeFilter} />
          <ContactsList
            contacts={getFilteredContacts}
            onDeleteContact={deleteContact}
          />
        </SectionTitle>
      </BoxContacts>
    </Container>
  );
};

export default App;

//! class

// import React, { Component } from 'react';
// import ContactsList from 'components/ContactsList';
// import Phonebook from 'components/Phonebook';
// import Filter from 'components/Filter';
// import { nanoid } from 'nanoid';
// import { Container, BoxPhonebook, BoxContacts } from './App.styled';
// import data from './data.json';
// import SectionTitle from 'components/SectionTitle';

// class App extends Component {
//   state = {
//     contacts: data,
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts);
//     if (parseContacts?.length) {
//       this.setState({ contacts: parseContacts });
//       return;
//     }
//     this.setState({ contacts: this.state.contacts });
//   }

//   componentDidUpdate(prevState, prevProps) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;
//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }
//   addContact = ({ name, number }) => {
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     const { contacts } = this.state;
//     const checkContact = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     checkContact
//       ? alert(`${name} is alreadi in contacts`)
//       : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilterContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const filterContacts = this.getFilterContacts();
//     return (
//       <Container>
//         <BoxPhonebook>
//           <SectionTitle title="Phonebook">
//             <Phonebook onSubmit={this.addContact} />
//           </SectionTitle>
//         </BoxPhonebook>
//         <BoxContacts>
//           <SectionTitle title="Contacts">
//             <Filter value={this.filter} onChange={this.changeFilter} />
//             <ContactsList
//               contacts={filterContacts}
//               onDeleteContact={this.deleteContact}
//             />
//           </SectionTitle>
//         </BoxContacts>
//       </Container>
//     );
//   }
// }

// export default App;
