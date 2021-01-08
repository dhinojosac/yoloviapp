import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpacingGrid from './SpacingGrid';

const useStyles = makeStyles((theme) => ({
    root:{
        padding: "20px"
    },
    storeFront: {
        display: "grid",
        gridGap: "30px",
        gridTemplateColumns: "1fr 1fr",
        marginBottom: "20px"
      },
  }));

export default function HomeView(){
    const classes = useStyles();
    const [isLoading, setLoading] = useState(true);
    const [dogs, setDogs] = useState([]);

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [url, setUrl] = useState();
    const [publishdate, setPublishdate] = useState();

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

        setDogs([{"id":0, "name":"Cabezona", "description":"Happy dog with blond hair", "url":"https://picsum.photos/200/300", "publishdate":getDateTime()},
                {"id":1,"name":"Baltito", "description":"Happy dog with blond hair", "url":"https://picsum.photos/201/303", "publishdate":getDateTime()},
                {"id":2,"name":"Nonito", "description":"Happy dog with blond hair", "url":"https://picsum.photos/212/303", "publishdate":getDateTime()},
                {"id":3,"name":"Chuli", "description":"Happy dog with blond hair", "url":"https://picsum.photos/210/323", "publishdate":getDateTime()},
                {"id":4,"name":"Lobito", "description":"Happy dog with blond hair", "url":"https://picsum.photos/225/302", "publishdate":getDateTime()},
                {"id":5,"name":"kiltrito", "description":"Happy dog with blond hair", "url":"https://picsum.photos/211/302", "publishdate":getDateTime()},
                {"id":6,"name":"Huachupé", "description":"Happy dog with blond hair", "url":"https://picsum.photos/212/302", "publishdate":getDateTime()}
            
            ])
    }

    useEffect(
        () => {
            fetchDogs();
        }
    , []);

    return(
        <>
        <div className={classes.root}>
            <SpacingGrid items={dogs}/>
        </div>
    {/*}
        <div className={classes.storeFront}>      

            {dogs.map(dog => <DogViewCard details={dog}/> )}
        
        </div>
    {*/}
        </>


    );
}