import { ContactCard } from './ContactCard';
import { Item, List } from './ContactList.style';
import propTypes from 'prop-types';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(item => (
        <Item key={item.id}>
          <ContactCard item={item} deletes={onDelete} />
        </Item>
      ))}
    </List>
  );
};
ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ),
  onDelete: propTypes.func.isRequired,
};
