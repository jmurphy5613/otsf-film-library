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
import DollyVEveHomecoming from './images/DollyVEveHomecoming.jpg';

import CardItem from './components/card-item/card-item.component';

import { useEffect, useState } from 'react';

import axios from 'axios';

function App() {


  const [movies, setMovies] = useState([

    {
      title: 'A Last Few Words',
      image: LastFewWords,
      year: 2020,
      category: 'drama',
      link: 'https://youtu.be/f-v3SyFUyKY'
    },
    {
      title: 'Greenlee',
      image: Greenlee,
      year: 2021,
      category: 'drama',
      link: 'https://www.youtube.com/watch?v=a_cExrzHK8g'
    },
    {
      title: 'Coming Clean',
      image: ComingClean,
      year: 2021,
      category: 'comedy',
      link: 'https://youtu.be/mcVFtrpZD2E'
    },
    {
      title: `Valentine's Eve 2`,
      image: ValentinesEve2,
      year: 2021,
      category: 'horror',
      link: 'https://youtu.be/7PDWnnAapgk'
    },
    {
      title: 'Save Yourself',
      image: SaveYourself,
      year: 2018,
      category: `horror comedy`,
      link: 'https://vimeo.com/295942843/bc1adf5184'
    },
    // {
    //   title: 'Birdboy',

    // }
    {
      title: 'The Day Tom Corman Dissapeared',
      image: TheDayTomCormanDissapeared,
      year: 2021,
      category: 'sci-fi',
      font: .9,
      link: 'https://www.youtube.com/watch?v=RMkaSZHxXyo'
    },
    {
      title: 'The Doppelgänger',
      image: TheDoppelganger,
      year: 2021,
      category: 'horror',
      link: 'https://www.youtube.com/watch?v=xjIbUepQsko&t=24s'
    },
    {
      title: 'Charcoal',
      image: Charcoal,
      year: 2021,
      category: `crime thriller`,
      link: 'https://youtu.be/8s1_DHgzzHg'
    },
    {
      title: 'he110',
      image: he110,
      year: 2020,
      category: `sci-fi drama romance`,
      link: 'https://youtu.be/juXsEBPuOCw'
    },
    {
      title: 'HONI',
      image: HONI,
      year: 2020,
      category: `thriller`,
      link: 'https://youtu.be/uYS5yrY6nXE'
    },
    {
      title: `Valentine's Eve`,
      image: ValentinesEve,
      year: 2020,
      category: `horror`,
      link: 'https://youtu.be/THJGgL_TjdA'
    },
    {
      title: 'Back Where We Started From',
      image: BackWhereWeStartedFrom,
      year: 2016,
      category: `drama`,
      font: 1,
      link: 'https://youtu.be/XvWgsQvzKkw'
    },
    {
      title: 'Home',
      image: Home,
      year: 2020,
      category: 'narrative short',
      link: 'https://www.youtube.com/watch?v=QqTIVN8g5dk'
    },
    {
      title: 'Look!',
      image: Look,
      year: 2019,
      category: 'drama',
      link: 'https://www.youtube.com/watch?v=FlUMbCl6_VY'
    },
    {
      title: 'The Chase',
      image: TheChase,
      year: 2020,
      category: 'horror',
      link: 'https://www.youtube.com/watch?v=0Broi084p1w'
    },
    {
      title: `Bussin'`,
      image: Bussin,
      year: 2020,
      category: `animation comedy`,
      link: 'https://www.youtube.com/watch?v=WLipeOokgZU&t=34s'
    },
    {
      title: 'Seeking Shelter',
      image: SeekingShelter,
      year: 2016,
      category: `documentary`,
      link: 'https://youtu.be/dz-a-fAekRE'
    },
    {
      title: `A Stone's Throw`,
      image : AStoneThrow,
      year: 2020,
      category: 'thriller',
      link: 'https://www.youtube.com/watch?v=v0IDynQ6sP0'
    },
    {
      title: 'Is Your Daughter Home?',
      image: IsYourDaughterHome,
      year: 2019,
      category: 'thriller',
      link: 'https://vimeo.com/332851027'
    },
    {
      title: 'Mortallity',
      image: Mortality,
      year: 2020,
      category: 'horror',
      link: 'https://youtu.be/__uQ4S3vgD8'
    },
    {
      title: 'Dolly v Eve',
      image: DollyvEve,
      year: 2020,
      category: 'horror',
      link: 'https://youtu.be/uwbcdzcsUMs'
    },
    {
      title: 'Bearing',
      image: Bearing,
      year: 2020,
      category: 'coming of age',
      link: 'https://www.youtube.com/watch?v=1DJnGDoOs00&t'
    },
    {
      title: 'It Comes At Halloween',
      image: ItComesAtHalloween,
      year: 2020,
      category: 'horror',
      link: 'https://youtu.be/pZiLCo5JpY8'
    },
    {
      title: 'Vending Machine',
      image: VendingMachine,
      year: 2020,
      category: 'drama',
      link: 'https://vimeo.com/346285733'
    },
    {
      title: 'Doubt',
      image: Doubt,
      year: 2020,
      category: 'horror',
      link: 'https://youtu.be/Xwx7ml2GUQM'
    },
    {
      title: 'The Interview',
      image: TheInterview,
      year: 2020,
      category: 'sci-fi',
      link: 'https://youtu.be/6PlELk73Rdk'
    },
    {
      title: 'Unholy Smokes: The Tale of Van Hunks & The Stranger',
      image: UnholySmoke,
      year: 2018,
      category: 'comedy',
      font: .7,
      link: 'https://www.youtube.com/watch?v=JsUURHbG_Pk&t=79s'
    },
    {
      title: 'Obsession',
      image: Obsession,
      year: 2020,
      category: 'horror',
      link: 'https://youtu.be/Nocmh26pCRc'
    },
    {
      title: 'The Sanctuary',
      image: TheSanctuary,
      year: 2016,
      category: 'horror',
      link: 'https://www.youtube.com/watch?v=3FipjZJsJrQ&list=PLPsubUeVcVjhOKbZMHtDCtmyyx9SGjuRu'
    },
    {
      title: 'The Orb',
      image: TheOrb,
      year: 2020,
      category: 'sci-fi',
      link: 'https://www.youtube.com/watch?v=bvErjgNuOO0'
    },
    {
      title: 'Revenge',
      image: Revenge,
      year: 2020,
      category: 'horror',
      link: 'https://youtu.be/2M0ta3Ps_iU'
    },
    {
      title: 'Pit Stop',
      image: PitStop,
      year: 2020,
      category: 'comedy',
      link: 'https://vimeo.com/461515926'
    },
    {
      title: 'Ripples',
      image: Ripples,
      year: 2020,
      category: `drama visual poem`,
      link: 'https://www.youtube.com/watch?v=EBByvTx7eVQ'
    },
    {
      title: 'Brosa Nostra',
      image: BrosaNostra,
      year: 2018,
      category: `comedy webseries`,
      link: 'https://www.youtube.com/watch?v=8L0E_LswXvQ&list=PLPsubUeVcVjgLbLmiF2omU0_Ju5gl7PC1'
    },
    {
      title: 'The Drowned',
      image: TheDrowned,
      year: 2020,
      category: 'horror',
      link: 'https://www.youtube.com/watch?v=CiSw2wXEYTg'
    },
    {
      title: 'Seeing Green',
      image: SeeingGreen,
      year: 2020,
      category: `comedy drama`,
      link: 'https://vimeo.com/444816764'
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
      category: 'horror',
      link: 'https://youtu.be/tquweU_J9hA'
    },
    {
      title: 'The Pet',
      image: ThePet,
      year: 2020,
      category: `sci-fi horror`,
      link: 'https://youtu.be/vtBUVkjxh6s'
    },
    {
      title: 'By Your Side',
      image: ByYourSide,
      year: 2020,
      category: 'horror',
      link: 'https://youtu.be/O3g-QISKx00'
    },
    {
      title: 'Lost In Search',
      image: LostInSearch,
      category: 'drama',
      year: 2020,
      link: 'https://youtu.be/LJ2W0nvFTE4'
    },
    {
      title: 'Buddy',
      image: Buddy,
      year: 2020,
      category: `kids film`,
      link: 'https://vimeo.com/412957345'
    },
    {
      title: 'Hairball',
      category: 'comedy',
      image: Hairball,
      year: 2020,
      link: 'https://youtu.be/YaCyDCaV3q8'
    },
    {
      title: 'NEFRA',
      year: 2020,
      category: 'suspense',
      image: NEFRA,
      link: 'https://youtu.be/mJ_cSwL-hnk'
    },
    {
      title: 'Dead Memories',
      image: DeadMemories,
      year: 2020,
      category: 'thriller',
      link: 'https://youtu.be/OlFmM4Xv1wk'
    },
    {
      title: 'Postmortem Dialogue',
      image: PostmortemDialogue,
      year: 2020,
      category: 'drama',
      link: 'https://www.youtube.com/watch?v=roaYI5KycXQ&t=1s'
    },
    {
      title: 'The Beautiful People',
      image: TheBeautifulPeople,
      year: 2020,
      category: 'drama',
      link: 'https://youtu.be/_RleI4_-_To'
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
      link: 'https://vimeo.com/414535490/8a315f906c'
    },
    {
      title: 'Freeman',
      category: 'thriller',
      year: 2020,
      image: Freeman,
      link: 'https://youtu.be/DL3DXCx765k'
    },
    {
      title: 'Missing',
      category: 'horror',
      year: 2020,
      image: Missing,
      link: 'https://youtu.be/rZDEamxzf6o'
    },
    {
      title: 'Mr.Shan',
      category: 'comedy',
      year: 2018,
      image: MrShan,
      link: 'https://www.youtube.com/watch?v=-LWfdMhJAlo&list=PLPsubUeVcVjiTkYF683Uq7bvFeVF-NCcU'
    },
    {
      title: 'Shadow Harbour',
      category: 'drama',
      year: 2020,
      image: ShadowHarbour,
      link: 'https://vimeo.com/438536234'
    },
    {
      title: 'Miniature',
      category: 'horror',
      year: 2020,
      image: Miniatures,
      link: 'https://youtu.be/NCZaFw_iRsc'
    },
    {
      title: 'Professionals',
      category: 'drama',
      year: 2020,
      image: Progessionals,
      link: 'https://youtu.be/B-v6EqLeAWU'
    },
    {
      title: 'Pandemia',
      category: 'animation',
      year: 2020,
      image: Pandemia,
      link: 'https://www.youtube.com/watch?v=kMurufXBO_U&t=4s'
    },
    {
      title: 'Never Record A Ghost',
      year: 2020,
      category: `mystery comedy`,
      image: NeverRecordAGhost,
      link: 'https://www.youtube.com/watch?v=Zwdr-R64xTA'
    },
    {
      title: 'Locked In',
      year: 2020,
      category: `thriller`,
      image: LockedIn,
      link: 'https://www.youtube.com/watch?v=0ivy4gjjSts&t=6s'
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
      image: TheRock,
      link: 'https://www.youtube.com/watch?v=qZQLYJufNuE&t=18s'
    },
    {
      title: 'Bird Cage',
      category: `horror`,
      year: 2020,
      image: BirdCage,
      link: 'https://youtu.be/LdUViu8Ryek'
    },
    {
      title: 'Backpack',
      year: 2020,
      category: `horror comedy`,
      image: Backpack,
      link: 'https://youtu.be/Vs8COuMtNZY'
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
    {
      title: 'Dolly V Eve Homecoming',
      year: 2021,
      category: 'horror',
      image: DollyVEveHomecoming,
      link: "https://www.youtube.com/watch?v=W9XmuOFd0Bo"
    }
  ]);

  const [allMovies, setAllMovies] = useState([]);

  useEffect(() => {
    axios.get('https://ots-dashboard.herokuapp.com/movie/all-movies')
    .then(res => {
      setAllMovies(movies.concat(res.data));
    })
  }, []);



  //search values
  const [searchValue, setSearchValue] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState('');

  //filter mechanism
  const filteredMovies = allMovies.filter(movie => {
    if(year !=='' && category !== ''){
      return movie.year == year && movie.category === category && movie.title.toLowerCase().includes(searchValue.toLowerCase());
    }
    else if(year !== '') {
      return movie.year == year && movie.title.toLowerCase().includes(searchValue.toLowerCase());
    }
    else if(category != '') { 
      return movie.category.toLowerCase().includes(category.toLowerCase()) && movie.title.toLowerCase().includes(searchValue.toLowerCase());
    }
    else {
      return movie.title.toLowerCase().includes(searchValue.toLowerCase());
    }
  });
  console.log(allMovies);
  return (
    <div className="background">
      <div className="header">
        <div class="select">
          <select onChange={e => setYear(e.target.value)}>
            <option value="">Year</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
          </select>
        </div>
        <input type="text" placeholder={"Search"} className="movieSearch" onChange={e => setSearchValue(e.target.value)} />
        <div class="select">
          <select onChange={e => setCategory(e.target.value)} defaultValue="">
            <option value="">Category</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="comedy">Comedy</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="kids film">Kids Film</option>
            <option value="suspense">Suspense</option>
            <option value="mystery">Mystery</option>
            
          </select>
        </div>
      </div>
      <div className="grid">
        {filteredMovies.map(movie => ( <CardItem name={`${movie.title} ${movie.year}`} image={movie.image}  category={movie.category} font={movie.font} link={movie.link} imagePath={movie.imagePath} videoEmbed={movie.videoEmbed} />))}
      </div>
    </div>
  );
}

export default App;
