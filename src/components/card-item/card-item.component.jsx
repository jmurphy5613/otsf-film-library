import React from 'react';
import "./card-item.css";


function CardItem(props) {
    
    return(
        <div className={"card"}>
            <div className={"card_image"} style={{ backgroundImage: `url(${props.image})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat` }}>
            </div>
            <div className={"card_content"}>
                <h3 className={"card_title"}>{props.name}</h3>
            </div>
        </div>
    )
}

export default CardItem;