import { useContext, useMemo, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, ThemeProvider, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../context';
// import { useDispatch, useSelector } from 'react-redux';
// import { starCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email:[ (value) => value.includes('@') , 'El correo debe tener una @.'],
  password:[ (value) => value.length >= 6 , 'La contraseña debe tener más de 6 dígitos.'],
  displayName:[ (value) => value.length >= 1 , 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  // const { status, errorMessage } = useSelector( state => state.auth  );
  // const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,   
  } = useForm(formData, formValidations);

  const {  starCreatingUserWithEmailPassword } = useContext( AuthContext );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true)

    if ( !isFormValid ) return;

    starCreatingUserWithEmailPassword(formState);
  }

  return (
    <div className="hero-background">
    <AuthLayout title='Crear cuenta'>
     
       <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'> 
       {/* <form  className='animate__animated animate__fadeIn animate__faster'>  */}
 
          <Grid container>

            <Grid item xs={ 12 } sx ={{ mt: 2 }}>
              <TextField 
              type="email"
              placeholder="Nombre completo"
              fullWidth
              name='displayName'
              value={displayName}
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
              InputProps={{
                style: { color: 'white', borderColor: 'white', borderWidth: 1, borderStyle: 'solid' },
    
              }}
              variant="outlined"

              />       
              </Grid> 

            <Grid item xs={ 12 } sx ={{ mt: 2 }}>
              <TextField 
              type="email"
              placeholder="correo"
              fullWidth
              name='email'
              value={email}
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
              InputProps={{
                style: { color: 'white', borderColor: 'white', borderWidth: 1, borderStyle: 'solid' },
    
              }}
              variant="outlined"
              />       
              </Grid> 

              <Grid item xs={ 12 } sx ={{ mt: 2 }}>
              <TextField 
              type="password"
              placeholder="contraseña"
              fullWidth
              name='password'
              value={password}
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted}
              helperText={ passwordValid }
              InputProps={{
                style: { color: 'white', borderColor: 'white', borderWidth: 1, borderStyle: 'solid' },
    
              }}
              variant="outlined"
              />       
              </Grid > 
              
              <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                  {/* <Grid 
                  item 
                  xs={ 12 }
                  display= { !!errorMessage ? '': 'none' }
                  >
                    <Alert severity='error'>{ errorMessage }</Alert>
                  </Grid> */}
                  <Grid item xs={ 12 }>
                    <Button
                    // disabled={ isCheckingAuthentication }
                    type= "submit"
                     variant='contained' 
                     fullWidth 
                     >
                      Crear cuenta
                    </Button>
                  </Grid>
                  
                  
                <Grid container direction='row' justifyContent='end'>

                    <Typography sx={{ mr: 1, mt: 1.5, mb: 1, color: 'white'  }}>¿Ya tienes cuenta?</Typography>
                    <Link sx={{ mt: 2 }} component={ RouterLink } color='primary' to="/auth/login">
                    ingresar
                    </Link>

                  </Grid>


              </Grid>

          </Grid>
        </form>

    </AuthLayout>
    </div>

        
      
  )
}
