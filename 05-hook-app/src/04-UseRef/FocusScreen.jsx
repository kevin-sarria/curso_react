
import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {

    const ref = useRef()

    const onclick = () => {
        console.log(ref);
        ref.current.select();
    }






  return (
    <>
        <h1>Focus Screen</h1>
        <hr />

        <input 
            type="text"
            placeholder='Ingrese su nombre'
            className='form-control'
            ref={ref}
            />

        <button className='btn btn-primary mt-3' onClick={onclick}>
            Set Focus
        </button>



    </>
  )
}






