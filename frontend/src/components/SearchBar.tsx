// SearchBar.tsx
import { TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { HiSearch } from "react-icons/hi";

/* interface SearchBarProps {
  onSearch: (query: string) => void;
} */

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // onSearch(query);
    setQuery(''); // Clear the input after search
  };

  return (
    <form onSubmit={handleSubmit} >
      <TextInput id="search" icon={HiSearch} type="search" placeholder="buscar" className='rounded-full'/>
    </form>
  );
};

export default SearchBar;