import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import {
  Wrapper,
  Input,
  Icon,
  SearchFormButton,
  SearchForm,
} from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const queryChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handelSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      toast.error('Please enter your search query :)');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Wrapper>
      <SearchForm onSubmit={handelSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          autocomplete="off"
          onChange={queryChange}
        />
        <Icon />
        <SearchFormButton type="submit">Search</SearchFormButton>
      </SearchForm>
    </Wrapper>
  );
};
SearchBox.propTypes = {
  onSubmit: PropTypes.func,
};
