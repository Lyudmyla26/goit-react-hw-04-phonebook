import { Search } from './Filter.styled';
import propTypes from 'prop-types';
export const Filter = ({ filter, onChange }) => {
  return <Search type="text" value={filter} onChange={onChange} />;
};
Filter.propTypesropTypes = {
  filter: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
