import React from 'react';
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './temaConfig'
import Navbar from './components/Navbar';
import Listas from './components/Listas';
import Oculto from './components/Oculto';
import Contenedor from './components/Contenedor';
import { Container } from '@material-ui/core';

const useStyle = makeStyles({
  boton: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  }
})

function App() {
  const classes = useStyle();
  return (
    <div>
      <Button variant="outlined" color="secondary" href="https://google.com">
        Color
      </Button>
      <Button variant="outlined" color="secondary" fullWidth>
        Color
      </Button>
      <Button variant="outlined" color="secondary" size="small">
        Color
      </Button>
      <Button variant="outlined" color="secondary" size="medium">
        Color
      </Button>
      <Button variant="outlined" color="secondary" size="large">
        Color
      </Button>
      <br/>  
      <DeleteIcon/>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>}>
        Delete
      </Button>
      <Button variant="contained" color="secondary" endIcon={<DeleteIcon/>}>
        Delete
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon/>
      </IconButton>
      <br/>
      <Typography variant="h1" color="initial">
        pepe
      </Typography>
      <Typography variant="body1" color="secondary" align="center" paragraph>
        pepe
      </Typography>
      <Typography variant="body1" color="primary" align="center">
        pepe
      </Typography>
      <br/>
      <Button className={classes.boton}>
        Mi boton personalizado
      </Button>
      <br/>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="secondary">
          boton
        </Button>
        <Button variant="contained" color="primary">
          boton
        </Button>
      </ThemeProvider>
      <br/>
      <ThemeProvider>
        <Navbar/>
      </ThemeProvider>
      <br/>
      <Listas/>
      <br/>
      <Oculto />
      <br />
      <Container>
        <Contenedor />
      </Container>
    </div>
  );
}

export default App;