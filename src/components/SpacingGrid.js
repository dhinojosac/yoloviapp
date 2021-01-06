import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DogViewCard from "./DogViewCard";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  const classes = useStyles();


  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="4">
          {props.items.map((value) => (
            <Grid key={value} item>
              <DogViewCard details={value}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
