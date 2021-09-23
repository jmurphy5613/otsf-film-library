import './App.css';

import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState([
    {
      title: 'The Doorstep',
      imageLink: '',
      year: '',
      category: 'shorts',
    },
    {
      title: 'A Last Few Words',
      imageLink: '',
      year: 2020,
      category: 'drama',
    },
    {
      title: 'Greenlee',
      imageLink: '',
      year: 2021,
      category: 'drama',
    },
    {
      title: 'Coming Clean',
      imageLink: '',
      year: 2021,
      category: 'comedy',
    }
  ]);

  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="background">
      <input type="text" placeholder={"Search"} className="movieSearch" onChange={e => setSearchValue(e.target.value)} />
      <div className="grid">
            <div className={"card"}>
                <div className={"card_image"} style={{ backgroundImage: `url()` }}>
                </div>
                <div className={"card_content"}>
                    <h3 className={"card_title"}>The Doorstep (2020)</h3>
                </div>
            </div>
            <div className={"card"}>
                <div className={"card_image"} style={{ backgroundImage: `url()` }}>
                </div>
                <div className={"card_content"}>
                    <h3 className={"card_title"}>A Last Few Words (2020)</h3>
                </div>
            </div>
            <div className={"card"}>
                <div className={"card_image"} style={{ backgroundImage: `url()` }}>
                </div>
                <div className={"card_content"}>
                    <h3 className={"card_title"}>Greenlee (2021)</h3>
                    <br />
                </div>
            </div>
            <div className={"card"}>
                <div className={"card_image"} style={{ backgroundImage: `url()` }}>
                </div>
                <div className={"card_content"}>
                    <h3 className={"card_title"}>Coming Clean (2021)</h3>
                    <br />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
