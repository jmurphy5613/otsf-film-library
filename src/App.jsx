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
import UnholySmoke from './images/UnholySmokesTheTaleofVanHunks&TheStranger.jpeg';
import Obsession from './images/Obsession.jpg';
import TheSanctuary from './images/THESANCTUARY.png';
import TheOrb from './images/TheOrb.jpg';
import Revenge from './images/Revenge.png';
import PitStop from './images/PitStop.jpg';
import Ripples from './images/Ripples.png';
import TheDrowned from './images/TheDrowned.jpg';
import SeeingGreen from './images/SeeingGreen.png';
import HistoryOfPresentIllness from './images/HistoryofPresentIllness.png';
import ThePet from './images/THEPET.jpg';
import ByYourSide from './images/ByYourSide.png';
import LostInSearch from './images/LostInSearch.png';
import Buddy from './images/Buddy.jpg';
import Hairball from './images/Hairball.png';
import BrosaNostra from './images/BrosaNostra.jpg';
import NEFRA from './images/NEFRA.jpg';
import DeadMemories from './images/DeadMemories.png';
import PostmortemDialogue from './images/PostmortemDialogue.png';
import TheBeautifulPeople from './images/TheBeautifulPeople.png';
import LettersFromTheHeart from './images/LettersfromtheHeart.png';
import Freeman from './images/Freeman.png';
import Missing from './images/MISSING.jpg';
import MrShan from './images/MrShan.jpg';
import ShadowHarbour from './images/ShadowHarbour.png';
import Miniatures from './images/Miniatures.png';
import Progessionals from './images/Professionals.png';
import Pandemia from './images/Pandemia.jpg';
import NeverRecordAGhost from './images/NeverRecordaGhost.png';
import LockedIn from './images/LockedIn.png';
import TheRock from './images/TheRock.png';
import BirdCage from './images/BirdCage.png';
import Backpack from './images/Backpack.jpg';

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
      title: 'Unholy Smokes: The Tale of Van Hunks & The Stranger',
      image: UnholySmoke,
      year: 2018,
      category: 'comedy'
    },
    {
      title: 'Obsession',
      image: Obsession,
      year: 2020,
      category: 'horror'
    },
    {
      title: 'The Sanctuary',
      image: TheSanctuary,
      year: 2016,
      category: 'horror'
    },
    {
      title: 'The Orb',
      image: TheOrb,
      year: 2020,
      category: 'sci-fi'
    },
    {
      title: 'Revenge',
      image: Revenge,
      year: 2020,
      category: 'horror'
    },
    {
      title: 'Pit Stop',
      image: PitStop,
      year: 2020,
      category: 'comedy'
    },
    {
      title: 'Ripples',
      image: Ripples,
      year: 2020,
      category: `drama visual poem`
    },
    {
      title: 'Brosa Nostra',
      image: BrosaNostra,
      year: 2018,
      category: `comedy webseries`
    },
    {
      title: 'The Drowned',
      image: TheDrowned,
      year: 2020,
      category: 'horror'
    },
    {
      title: 'Seeing Green',
      image: SeeingGreen,
      year: 2020,
      category: `comedy drama`
    },
    // {
    //   title: 'The Promise',
    //   year: 2019,
    //   category: 'suspense'
    // }
    {
      title: 'History of Present Illness',
      year: 2020,
      image: HistoryOfPresentIllness,
      category: 'horror'
    },
    {
      title: 'The Pet',
      image: ThePet,
      year: 2020,
      category: `sci-fi horror`
    },
    {
      title: 'By Your Side',
      image: ByYourSide,
      year: 2020,
      category: 'horror'
    },
    {
      title: 'Lost In Search',
      image: LostInSearch,
      category: 'drama',
      year: 2020,
    },
    {
      title: 'Buddy',
      image: Buddy,
      year: 2020,
      category: `kids film`
    },
    {
      title: 'Hairball',
      category: 'comedy',
      image: Hairball,
      year: 2020,
    },
    {
      title: 'NEFRA',
      year: 2020,
      category: 'suspense',
      image: NEFRA,
    },
    {
      title: 'Dead Memories',
      image: DeadMemories,
      year: 2020,
      category: 'thriller',
    },
    {
      title: 'Postmortem Dialogue',
      image: PostmortemDialogue,
      year: 2020,
      category: 'drama',
    },
    {
      title: 'The Beautiful People',
      image: TheBeautifulPeople,
      year: 2020,
      category: 'drama',
    },
    // {
    //   title: 'Dante: A Replication',
    //   year: 2020,
    //   category: `horror sci-fi thriller mystery drama`,

    // }
    {
      title: 'Letters From The Heart',
      image: LettersFromTheHeart,
      year: 2020,
      category: 'comedy',
    },
    {
      title: 'Freeman',
      category: 'thriller',
      year: 2020,
      image: Freeman,
    },
    {
      title: 'Missing',
      category: 'horror',
      year: 2020,
      image: Missing
    },
    {
      title: 'Mr.Shan',
      category: 'comedy',
      year: 2018,
      image: MrShan
    },
    {
      title: 'Shadow Harbour',
      category: 'drama',
      year: 2020,
      image: ShadowHarbour
    },
    {
      title: 'Miniature',
      category: 'horror',
      year: 2020,
      image: Miniatures
    },
    {
      title: 'Professionals',
      category: 'drama',
      year: 2020,
      image: Progessionals
    },
    {
      title: 'Pandemia',
      category: 'animation',
      year: 2020,
      image: Pandemia
    },
    {
      title: 'Never Record A Ghost',
      year: 2020,
      category: `mystery comedy`,
      image: NeverRecordAGhost
    },
    {
      title: 'Locked In',
      year: 2020,
      category: `thriller`,
      image: LockedIn
    },
    // {
    //   title: 'Morning Dreams Come True',
    //   year: 2020,
    //   category: `drama`,
    //   iamge: 
    // }
    {
      title: 'The Rock',
      year: 2019,
      category: `comedy thriller`,
      image: TheRock
    },
    {
      title: 'Bird Cage',
      category: `horror`,
      year: 2020,
      image: BirdCage
    },
    {
      title: 'Backpack',
      year: 2020,
      category: `horror comedy`,
      image: Backpack
    },
    // {
    //   title: 'Bum Promises',
    //   year: 2016,
    //   category: 'drama',
    //   image: 
    // }
    // {
    //   title: 'The Drawing',
    //   year: 2020,
    //   category: 'horror',
    //   image
    // }


  ]);

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="background">
      <input type="text" placeholder={"Search"} className="movieSearch" onChange={e => setSearchValue(e.target.value)} />
      <div class="select">
        <select>
          <option value="1">Category</option>
          <option value="2">Drama</option>
          <option value="3">Nice!</option>
        </select>
      </div>
      <div className="grid">
        {movies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase())).map(movie => ( <CardItem name={`${movie.title} ${movie.year}`} image={movie.image}  category={movie.category} />))}
      </div>
    </div>
  );
}

export default App;
