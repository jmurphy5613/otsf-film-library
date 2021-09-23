import './App.css';

import LastFewWords from './images/ALastFewWords.png';
import Greenlee from './images/Greenlee.png';
import ComingClean from './images/ComingClean.png';

import CardItem from './components/card-item/card-item.component';

import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState([

    {
      title: 'A Last Few Words',
      image: LastFewWords,
      year: 2020,
      category: 'drama',
    },
    {
      title: 'Greenlee',
      image: Greenlee,
      year: 2021,
      category: 'drama',
    },
    {
      title: 'Coming Clean',
      image: ComingClean,
      year: 2021,
      category: 'comedy',
    }
  ]);

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="background">
      <input type="text" placeholder={"Search"} className="movieSearch" onChange={e => setSearchValue(e.target.value)} />
      <div className="grid">
        {movies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase())).map(movie => ( <CardItem name={`${movie.title} ${movie.year}`} image={movie.image}  category={movie.category} />))}
      </div>
    </div>
  );
}

export default App;
