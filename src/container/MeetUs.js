import React from 'react'

import Meet from "../assets/help.jpeg";

const MeetUs = (props) => {

    const { imagen, titulo, descripcion } = props;
    return (
        <div>
            <div className="row h-100 justify-content-left ml-5  ">
                <img src={Meet} className="img-fluid " alt="Responsive image" width="30%" height="30%" ></img>
            </div>
            <div class="card">
                <img src={imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>

                </div>
            </div>
        </div>
    )
}

export default MeetUs
