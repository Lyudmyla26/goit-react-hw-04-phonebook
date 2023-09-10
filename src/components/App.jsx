import { ContactList } from './ContactList/ContactList.jsx';
import { ContactForm } from './ContactForm/ContactForm.jsx';
import { Filter } from './Filter/Filter.jsx';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
const getInitialContacts =()=>{const saveContacts = localStorage.getItem('array-contacts');
if (saveContacts !== null) {
 return  JSON.parse(saveContacts);}
 return [
   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
 ] };
export const App = () => {
  const [filter, setFilter] = useState('')
  const [contacts, setContacts] = useState(getInitialContacts); 
 
  useEffect(()=>{localStorage.setItem(
    'array-contacts',
    JSON.stringify(contacts)
  );}, [contacts])
 
  const handelDelete = (id) => {
    setContacts(prevState => prevState.filter(item => item.id !== id),)
  };
  const addContact = (newContact) => {
    const oldContact = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (oldContact) {
      alert(`${oldContact.name} already exists`);
      return;
    }
    setContacts(prevState =>([...prevState, { ...newContact, id: nanoid() }]))
   
  };
 const changeFilter = (event) => {
  setFilter( event.target.value )
  };
  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    const visibleContacts = getVisibleContacts()
 return(<>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addContact} />

    <h2>Contacts</h2>
    <Filter filter={filter} onChange={changeFilter} />
    <ContactList contacts={visibleContacts} onDelete={handelDelete} />
  </>)
};