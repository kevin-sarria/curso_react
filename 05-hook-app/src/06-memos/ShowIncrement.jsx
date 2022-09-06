import { memo } from "react";


export const ShowIncrement = memo(({ increment }) => {
  
  // console.log(' Me volvi a generar :c ');
  
  
    return (
    <button 
        className="btn btn-primary"
        onClick={ () => { increment(5) } }
    >
        Incrtementar
    </button>
  )
})
