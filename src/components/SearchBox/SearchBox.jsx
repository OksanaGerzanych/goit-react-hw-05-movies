import { useState } from 'react';
import { Wrapper, Input, Icon, SearchFormButton, SearchForm } from './SearchBox.styled';

export const SearchBox = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const queryChange = event => {
    setQuery(event.target.value.toLowerCase());
  };

  const handelSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      alert ('Please enter your search query :)');
      return;
    }
    onSearch(query);
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
        <SearchFormButton type="submit">
          <Icon />
        </SearchFormButton>
      </SearchForm>
    </Wrapper>
  );
};
