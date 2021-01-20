import React, {useState, useEffect} from 'react';
import DogViewCard from "./DogViewCard.js";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";



export default function DogDetailView(){
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

        setDog({"id":0, "name":"Cabezona", "description":"Happy dog with blond hair", "url":"https://picsum.photos/200/300", "publishdate":getDateTime()})
    }

    useEffect(
        () => {
            fetchDogs();
        }
    , []);

    return (
        <>
        <p></p>
        <Link to="/">Volver atrás</Link>
        <p></p>
        <h1>Perrito {id}</h1>
        <DogViewCard details= {dog}/>
        </>
    );


}