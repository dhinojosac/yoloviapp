import React, {useState, useEffect} from 'react';
import DogViewCard from "./DogViewCard.js";
import {useParams} from "react-router-dom";


export default function DogView(){
    const [name, setName] = useState();
    const [description, setDescription] = useState();




    return (
        <>
        <h1>Perrito</h1>
        <DogViewCard details= {name}/>
        </>
    );


}