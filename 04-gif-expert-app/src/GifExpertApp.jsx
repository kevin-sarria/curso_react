import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) { return; }

    setCategories([newCategory, ...categories])
  }

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory
        // setCategories={ setCategories }  
        onNewValue={(value) => onAddCategory(value)}
      />
    
      {
      
        categories.map( category => (
        <GifGrid key={category} category={category} />
        ))

      }


    </>
  )
}


export default GifExpertApp;
