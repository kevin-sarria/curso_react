import { useState, useEffect } from "react"

export const SimpleForm = () => {
  
  
    const [formState, setFormState] = useState({
        username: 'Estaduardo',
        email: 'correo2000@correo.com'
    });

    const { username, email } = formState;
  
    const onInputChange = ({ target }) => {
        const { name, value } = target;


        setFormState({

            ...formState,
            [ name ]: value

        });

    }


    useEffect( () => {
        console.log('UseEffect');
    }, [] );


    useEffect( () => {
        console.log('UseEffect');
    }, [formState] );




  
    return (
    <>
    
        <h1>Formulario Simple</h1>

        <hr />

        <input 
            type="text" 
            className="form-control mt-2" 
            placeholder="username" 
            name="username" 
            value={username}
            onChange={ onInputChange }
        />

        <input 
            type="email" 
            className="form-control mt-2" 
            placeholder="correo@correo.com" 
            name="email"
            value={email} 
            onChange={ onInputChange }
        />

    </>
  )
}
