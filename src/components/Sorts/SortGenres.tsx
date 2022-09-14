import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CheckBox from '../CheckBox/CheckBox';
import StyledSort from './Sorts.styles';

const genres = [
  'Fiction',
  'Non—fiction',
  'Light fiction',
  'Science-fiction',
  'Fantasy',
  'Business & Finance',
  'Politics',
  'Travel books',
  'Autobiography',
  'History',
  'Thriller / Mystery',
  'Romance',
  'Satire',
  'Horror',
  'Health / Medicine',
  'Children’s books',
  'Encyclopedia',
];

const SortGenres = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentGenres, setCurrentGenres] = useState('');

  useEffect(() => {
    setCurrentGenres(searchParams.get('genres') || '');
  }, [searchParams]);

  const onChangeCheck = (item: string) => {
    let newArr = '';
    if (currentGenres.includes(item)) {
      const newGenres = currentGenres.split(',');
      newGenres.splice(newGenres.indexOf(item), 1);
      newArr = newGenres.join();
    } else if (currentGenres.length === 0) {
      newArr = `${item}`;
    } else {
      newArr = `${currentGenres},${item}`;
    }
    searchParams.set('genres', newArr);
    if (newArr === '') {
      searchParams.delete('genres');
    }
    setSearchParams(searchParams);
  };

  return (
    <StyledSort>
      <ul>
        {genres.map((item, index) => (
          <li key={index}>
            <CheckBox
              value={currentGenres.includes(item)}
              index={index}
              onChange={() => onChangeCheck(item)}
            />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </StyledSort>
  );
};

export default SortGenres;
