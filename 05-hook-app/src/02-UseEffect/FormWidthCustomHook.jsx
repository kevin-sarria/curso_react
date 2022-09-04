import { useEffect } from "react"
import { useForm } from "../hooks/useForm"


export const FormWidthCustomHook = () => {
  
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
  });

  
    return (
    <>
    
        <h1>Formulario Con Custom Hook</h1>

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

        <input 
            type="password" 
            className="form-control mt-2" 
            placeholder="contraseña" 
            name="password"
            value={password} 
            onChange={ onInputChange }
        />

        <button className="btn btn-primary mt-3" onClick={onResetForm}>Borrar</button>

    </>
  )
}
