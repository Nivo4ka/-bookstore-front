import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CheckBox from '../CheckBox/CheckBox';
import StyledSort from './Sorts.styles';

interface IFilter {
  name: string;
  isCheck: boolean;
}

interface IProps {
  onClick?: () => void;
  onChangeCheck?: (index: number) => void;
  name?: string;
  arrFilter?: string[];
}

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

const SortGenres: React.FC<IProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  let currentGenres = '';
  currentGenres = searchParams.get('genres') || '';
  console.log(currentGenres);

  const onChangeCheck = (item: string) => {
    if (currentGenres.includes(item)) {
      // const genresStr = currentGenres.reduce((acc, elem) =>
      // (elem !== item ? (`${acc},${elem}`) : acc), '');
      searchParams.delete('genres');
      searchParams.set('genres', currentGenres);
    }
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
