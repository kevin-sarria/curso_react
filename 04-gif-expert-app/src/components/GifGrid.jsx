import { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
  
    return (
    <>
        <h3>{ category }</h3>

        {
            isLoading && ( <h4>Cargando...</h4> )
        }

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


