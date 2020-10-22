import React from 'react'

import About from "../assets/about.jpeg";

const AboutUs = () => {
    return (
        <div>
            <div className="row h-100 justify-content-center align-items-center ">
                <img src={About} class="img-fluid " alt="Responsive image" width="70%" height="50%" ></img>
            </div>

            <p className="container text-center ">

                IN K'AATECH es una fundación sin ánimo de lucro creada en octubre de 2015 por unas
                hermanas con amplia experiencia en el rescate y adopción animal que
                deciden unir sus fuerzas, entusiasmo y pasión para luchar por los más indefensos.
                </p>
            <p className="container text-center" >
                Damos en adopción perritos y gatitos rescatados en situación de calle,
            abandonados, atropellados, maltratados, moribundos, etc., a los que se les cura, rehabilita,
                    esteriliza, desparasita y vacuna para darlos en adopción responsable.</p>
            <p className="container text-center text-danger">
                Buscamos familias que los acepten y respeten como a un miembro más.
                </p>

        </div >
    )
}

export default AboutUs
