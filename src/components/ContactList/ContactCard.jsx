import { Button, Name, Contact } from './ContactList.style';
import propTypes from 'prop-types';
export const ContactCard = ({ item: { name, number, id }, deletes }) => {
  return (
    <>
      <Name>{name}</Name>
      <Contact>{number}</Contact>
      <Button onClick={() => deletes(id)}>Delete</Button>
    </>
  );
};
ContactCard.propTypes = {
  item: propTypes.object,
  deletes: propTypes.func.isRequired,
};
