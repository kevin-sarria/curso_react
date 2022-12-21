import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 8 , 'El password debe tener al menos 8 caracteres.'],
  displayName: [ (value) => value.length >= 2 , 'El nombre es obligatorio.']
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );

  const isCheckingAuthentication = useMemo( () => status === 'checking' || status === 'authenticated' , [status] );

  const { 
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {

    e.preventDefault();
    setformSubmitted(true);

    if( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );


  }

  return (

    <AuthLayout title='Crear Cuenta'>

      <form className="animate__animated animate__fadeIn animate__faster" onSubmit={onSubmit}>

        <Grid container>

          <Grid item xs={12} sx={{ mt: 2 }}>

            <TextField
              label="Nombre Completo"
              type="text"
              placeholder='Tu Nombre'
              fullWidth
              name='displayName'
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            ></TextField>

          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>

            <TextField
              label="Correo"
              type="email"
              placeholder='correo@google.com'
              fullWidth
              name='email'
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            ></TextField>

          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>

            <TextField
              label="Contraseña"
              type="password"
              placeholder='Contraseña'
              fullWidth
              name='password'
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            ></TextField>

          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

          <Grid
            item
            xs={12}
            display={ !!errorMessage ? 'block' : 'none' }
          >
            <Alert severity='error'>{errorMessage}</Alert>
          </Grid>

            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                disabled={ isCheckingAuthentication }
              >
                Crear Cuenta
              </Button>
            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya Tienes Cuenta?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login'>
              Ingresar
            </Link>
          </Grid>

        </Grid>

      </form>

    </AuthLayout>

  )
}
