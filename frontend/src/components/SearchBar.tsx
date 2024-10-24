// SearchBar.tsx
import React, { useState } from 'react';
import { TextField } from '@radix-ui/themes';
import { Box, Button, Flex } from '@radix-ui/themes';

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
      <Box maxWidth='1400px'>
        <TextField.Root placeholder="Buscar" size={'2'} radius='full' >
          <TextField.Slot>

          </TextField.Slot>
        </TextField.Root>
      </Box>
    </form>
  );
};

export default SearchBar;