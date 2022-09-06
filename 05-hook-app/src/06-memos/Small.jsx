import { memo } from "react";


export const Small = memo(({ value }) => {
  

    console.log(' Me voolví a generar :c ');

  
    return (
    <small>{ value }</small>
  )
})
