import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import MapView from './MapView.js';
import { loremIpsum } from "lorem-ipsum";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        padding: "30px"
    },
    imageDog: {
      objectFit: "cover",
      width: "500px",
      height: "400px"
      
    },
    nameDog:{
        fontSize: "50px"
    }
  }));


export default function DogDetailView(){
    const classes = useStyles();
    const [dog, setDog] = useState("");
    const params = useParams();
    console.log(params); // object containing params

    const id = params.id;

    function getDateTime(){
        var today = new Date();

        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        return  date+' '+time;
    }


    function fetchDogs(){
        /*
        async function fetchData(){
            try {
                const response = await fetch("https://react-tutorial-demo.firebaseio.com/users.json")
                const data = await response.json();
                setIsLoading(false)
                setUsers(data);
              } catch (error) {
                  console.log(error)
                  setIsLoading(false);
              } 
        }
        */

        setDog( {"id":0, "name":"Cabezona", "description":loremIpsum({count:1}), "url":"https://picsum.photos/200/300", "publishdate":getDateTime(), "content":loremIpsum({count:5}) });
    }

    useEffect(
        () => {
            fetchDogs();
        }
    , []);

    return (
        <div className={classes.root}>
        <p></p>
        <Link to="/">Volver atrás</Link>
        <p></p>
        <h1 className={classes.nameDog}>{dog.name}</h1>
        <img  className={classes.imageDog} src={dog.url} width="200" />
        <p>{dog.description}</p>
        <p></p>
        <p></p>
        <p>Última vez visto:
        </p>
        <MapView />
        <p>{dog.publishdate}</p>
        </div>
    );


}