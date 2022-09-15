import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import CheckBox from '../CheckBox/CheckBox';
import StyledSort from './Sorts.styles';

const SortGenres = () => {
  const genres = useAppSelector((state) => state.filter.genres);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentGenres, setCurrentGenres] = useState(searchParams.get('genres') || '');
  const newGenres = currentGenres.split(',');

  useEffect(() => {
    setCurrentGenres(searchParams.get('genres') || '');
  }, [searchParams]);

  const onChangeCheck = (item: string) => {
    let newArr = '';
    if (currentGenres.includes(item)) {
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
              value={newGenres.includes(`${item.id}`)}
              index={index}
              onChange={() => onChangeCheck(`${item.id}`)}
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </StyledSort>
  );
};

export default SortGenres;
