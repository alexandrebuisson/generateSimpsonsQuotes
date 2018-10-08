import React from 'react';

const Generate = (props) => {
    return (
        <div className="Citation">
            <img src={props.citations.image} alt="personnages" />
            <h1>{props.citations.character}</h1>
            <h4>{props.citations.quote}</h4>
        </div>
    )
}
export default Generate;