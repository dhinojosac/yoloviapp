import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";

const colors = [
    {
        value: 'empty',
        label: '',
    },
    {
      value: 'cafe',
      label: 'Cafe',
    },
    {
      value: 'negro',
      label: 'Negro',
    },
    {
      value: 'blanco',
      label: 'Blanco',
    },
  ];

  const sizes = [
    {
        value: 'empty',
        label: '',
    },
    {
      value: 'grande',
      label: 'Grande',
    },
    {
      value: 'pequeño',
      label: 'Pequeño',
    }
    
  ];

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "30px",
    },
    flex: {
        display: "flex!important",
        height: "100vh"
    },      
    center: {
        margin: "0 auto", 
        alignSelf: "center"
    },
  }));

const AddDogForm = () => {
    const classes = useStyles();
    const [color, setColor] = React.useState('');

    const handleChange = (event) => {
        setColor(event.target.value);
    };

    return (
            <div row>
              
                  <div className={classes.root}>
                    <p></p>
                        <Link to="/">Volver atrás</Link>
                    <p></p>

                    <form className={classes.root}>

                    <TextField
                        id="standard-error-helper-text"
                        label="Nombre del Perrito"
                        />

                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Color"
                        value={color}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Porfavor selecciona el color"
                        variant="outlined"
                        >
                        {colors.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>

                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Tamaño"
                        value={color}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Porfavor selecciona el tamaño"
                        variant="outlined"
                        >
                        {sizes.map((option) => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                    </TextField>
                    
                    <TextField
                        id="outlined-multiline-static"
                        label="Agrega una información extra que pueda ayudar a identificarlo"
                        multiline
                        rows={4}
                        variant="outlined"
                        />

                    </form>
            </div>
        </div>
    )
}
export default AddDogForm;