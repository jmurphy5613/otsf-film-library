import './App.css';

function App() {
    return (
      <div className="background">
        <input type="text" placeholder={"Search"}/>
        <div className="grid">
            <div className={"card"}>
                <div className={"card_image"} style={{ backgroundImage: `url()` }}>
                </div>
                <div className={"card_content"}>
                    <h3 className={"card_title"}>Test Movie</h3>
                </div>
            </div>
            <div className={"card"}>
                <div className={"card_image"} style={{ backgroundImage: `url()` }}>
                </div>
                <div className={"card_content"}>
                    <h3 className={"card_title"}>Test Movie</h3>
                </div>
            </div>
            <div className={"card"}>
                <div className={"card_image"} style={{ backgroundImage: `url()` }}>
                </div>
                <div className={"card_content"}>
                    <h3 className={"card_title"}>Test Movie</h3>
                    <h4>Drama</h4>
                </div>
            </div>
        </div>
      </div>
    );
}

export default App;
