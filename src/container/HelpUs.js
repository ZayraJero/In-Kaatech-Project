import React from 'react'

import Help from "../assets/shelter.jpg";

const HelpUs = () => {
    return (
        <div>
            <div className="row h-100 justify-content-center align-items-center ">
                <img src={Help} className="img-fluid " alt="Responsive image" width="50%" height="50%" ></img>
            </div>
            <div class="list-group container ">
                <button type="button" className="list-group-item list-group-item-action">
                    Donativos
  </button>
                <button type="button" className="list-group-item list-group-item-action">Donativos en especie</button>
                <button type="button" className="list-group-item list-group-item-action">Voluntarios</button>
                <button type="button" className="list-group-item list-group-item-action">Se un padrin@</button>

            </div>
        </div>
    )
}

export default HelpUs
