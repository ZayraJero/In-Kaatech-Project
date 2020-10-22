import React, { useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import MeetUs from '../container/MeetUs';

import axios from 'axios';

const Main = () => {

    const [gifs, setGifs] = useState([]);

    const getGifs = () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?api_key=kOqjohbxTPsRUMgk1mqiboy7620PHBM0&q=cat&limit=5'

        axios.get(URL).then(respuesta => {
            console.log(respuesta.data.data);
            setGifs(respuesta.data.data)
        }).catch(error => {
            console.log(error);
        })
    }
    useEffect(() => {
        getGifs();
    }, [])

    return (
        <div>
            <NavBar />
            <div className="container mt-5">

                {gifs.map((gif, index) => {
                    return (
                        <MeetUs
                            imagen={gif.images.downsized_medium.url}
                            titulo={gif.title}
                            link={gif.url}
                            key={gif.id} />
                    )
                })}

            </div>


        </div>
    )
}


export default Main;
