import './App.css';

import LastFewWords from './images/ALastFewWords.png';
import Greenlee from './images/Greenlee.png';
import ComingClean from './images/ComingClean.png';
import AStoneThrow from './images/AStoneThrow.png';
import IsYourDaughterHome from './images/IsYourDaughterHome.jpg';
import Mortality from './images/Mortality.jpg';
import DollyvEve from './images/DollyvEve.png';
import Bearing from './images/Bearing.png';
import ItComesAtHalloween from './images/ItComesAtHalloween.png';
import ValentinesEve2 from './images/ValentinesEve2.png';
import SaveYourself from './images/SaveYourself.png';
import TheDayTomCormanDissapeared from './images/TheDayTomCormanDisappeared.png';
import TheDoppelganger from './images/TheDoppelgänger.png';
import Charcoal from './images/Charcoal.png';
import he110 from './images/he110.png';
import HONI from './images/HONI.png';
import ValentinesEve from './images/ValentinesEve.png';
import BackWhereWeStartedFrom from './images/BackWhereWeStartedFrom.jpg';
import Home from './images/HOME.jpeg';
import Look from './images/Look.png';
import TheChase from './images/TheChase.png';
import Bussin from './images/Bussin.png';
import SeekingShelter from './images/SeekingShelter.jpg';
import VendingMachine from './images/VendingMachine.png';
import Doubt from './images/Doubt.jpg';
import TheInterview from './images/TheInterview.png';

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
    },
    {
      title: `Valentine's Eve 2`,
      image: ValentinesEve2,
      year: 2021,
      category: 'horror'
    },
    {
      title: 'Save Yourself',
      image: SaveYourself,
      year: 2018,
      category: `horror comedy`
    },
    // {
    //   title: 'Birdboy',

    // }
    {
      title: 'The Day Tom Corman Dissapeared',
      image: TheDayTomCormanDissapeared,
      year: 2021,
      category: 'sci-fi'
    },
    {
      title: 'The Doppelgänger',
      image: TheDoppelganger,
      year: 2021,
      category: 'horror'
    },
    {
      title: 'Charcoal',
      image: Charcoal,
      year: 2021,
      category: `crime thriller`
    },
    {
      title: 'he110',
      image: he110,
      year: 2020,
      category: `sci-fi drama romance`
    },
    {
      title: 'HONI',
      image: HONI,
      year: 2020,
      category: `thriller`
    },
    {
      title: `Valentine's Eve`,
      image: ValentinesEve,
      year: 2020,
      category: `horror`
    },
    {
      title: 'Back Where We Started From',
      image: BackWhereWeStartedFrom,
      year: 2016,
      category: `drama`
    },
    {
      title: 'Home',
      image: Home,
      year: 2020,
      category: 'narrative short'
    },
    {
      title: 'Look!',
      image: Look,
      year: 2019,
      category: 'drama'
    },
    {
      title: 'The Chase',
      image: TheChase,
      year: 2020,
      category: 'horror'
    },
    {
      title: `Bussin'`,
      image: Bussin,
      year: 2020,
      category: `animation comedy`
    },
    {
      title: 'Seeking Shelter',
      image: SeekingShelter,
      year: 2016,
      category: `documentary`
    },
    {
      title: `A Stone's Throw`,
      image : AStoneThrow,
      year: 2020,
      category: 'thriller'
    },
    {
      title: 'Is Your Daughter Home?',
      image: IsYourDaughterHome,
      year: 2019,
      category: 'thriller',
    },
    {
      title: 'Mortallity',
      image: Mortality,
      year: 2020,
      category: 'horror'
    },
    {
      title: 'Dolly v Eve',
      image: DollyvEve,
      year: 2020,
      category: 'horror'
    },
    {
      title: 'Bearing',
      image: Bearing,
      year: 2020,
      category: 'coming of age'
    },
    {
      title: 'It Comes At Halloween',
      image: ItComesAtHalloween,
      year: 2020,
      category: 'horror'
    },
    {
      title: 'Vending Machine',
      image: VendingMachine,
      year: 2020,
      category: 'drama'
    },
    {
      title: 'Doubt',
      image: Doubt,
      year: 2020,
      category: 'horror'
    },
    {
      title: 'The Interview',
      image: TheInterview,
      year: 2020,
      category: 'sci-fi'
    },
    {
      
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
