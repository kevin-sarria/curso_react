import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect( () => {
        const images = getGifs(category)
            .then( newImages => setImages(newImages) )
    }, [])
    

  
    return (
    <>
        <h3>{ category }</h3>
        <div className="card-grid">
            { 
                images.map( (img) => (
                    <GifItem key={img.id} { ...img } /> 
                )) 
            }
        </div>
    </>
  )

}


