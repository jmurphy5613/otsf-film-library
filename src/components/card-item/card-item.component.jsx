import React from 'react';
import "./card-item.css";


function CardItem(props) {

    if(props.font) {
        return(
                <div className={"card"} style={{ cursor: 'pointer' }}>
                    <div className={"card_image"} style={{ backgroundImage: `url(${props.image})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat` }}>
                    </div>
                    <div className={"card_content"}>
                        <h3 className={"card_title"} style={{ fontSize: props.font + 'rem' }}>{props.name}</h3>
                    </div>
                </div>
        )
    }

    return(
        <a href={props.link} target="_blank">
                        <div className={"card"} style={{ cursor: 'pointer' }}>
            <div className={"card_image"} style={{ backgroundImage: `url(${props.image})`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: `no-repeat` }}>
            </div>
            <div className={"card_content"}>
                <h3 className={"card_title"}>{props.name}</h3>
            </div>
            </div>
        </a>
    )
}

export default CardItem;