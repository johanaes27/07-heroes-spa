// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"

import { AuthLayout } from '../layout/AuthLayout';
import { useContext, useState } from "react";

import { AuthContext } from "../context";
import { useForm } from "../../hooks/useForm";



const formData = {
  email:'',
  password:''
}

export const LoginPage = () => {
  // const { status, errorMessage } = useSelector( state => state.auth ); 
  
  const { email, password, onInputChange } = useForm(formData);

  // const isAuthenticating = useMemo(() => status === 'checking', [status]);

 
  const onGoogleSignIn = async (event) => {
    event.preventDefault();
     startGoogleSignIn() ;
  } 


  const { startGoogleSignIn, startLoginWithEmailPassword } = useContext( AuthContext );

  const onSubmit = (event) => {

    event.preventDefault();
    
    startLoginWithEmailPassword({email, password});
    
  }

return (


  <div className="hero-background">
  <AuthLayout title='Login' >

     <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>

        <Grid container>
        <Grid item xs={ 12 } sx ={{ mt: 2 }}>
          <TextField  
          type="email"
          placeholder="correo@google.com"
          fullWidth
          name="email"
          value={ email }
          onChange={ onInputChange }
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
          name="password"
          value={ password }
          onChange={ onInputChange }
          InputProps={{
            style: { color: 'white', borderColor: 'white', borderWidth: 1, borderStyle: 'solid' },
          }}
          variant="outlined"
          />       
          </Grid > 
          
          <Grid container 
          spacing={ 2 } 
          sx={{ mt: 1 }}
          >

            {/* <Grid 
                item 
                xs={ 12 }
                display= { !!errorMessage ? '': 'none' }
                >
                  <Alert severity='error'>{ errorMessage }</Alert>
                </Grid> */}

              <Grid item xs={ 12 } sm={ 6 }>
                <Button
                // disabled = { isAuthenticating }
                type='submit' 
                variant='contained' 
                fullWidth 
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Button 
                // disabled = { isAuthenticating }
                variant='contained' 
                fullWidth
                onClick={ onGoogleSignIn }                                    
                >
     
                  <Typography sx={{ ml: 1}}>Google</Typography>
                </Button>
              </Grid>

              <Grid container direction='row' justifyContent='end'>

                <Link sx={{ mt: 2 }} component={ RouterLink } color='primary' to="/auth/register">
                {/* <Link sx={{ mt: 2 }} color='primary' to="/auth/register"> */}
                Crear una cuenta
                </Link>

              </Grid>


          </Grid>

        </Grid>
      </form>

  </AuthLayout>
  </div>

      
    
)
}


