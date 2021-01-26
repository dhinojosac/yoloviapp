import React, {useState, useLayoutEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import useMapboxMap from "../hooks/useMapboxMap.js";

const useStyles = makeStyles((theme) => ({
    map: {
        height: "300px",
    }
  }));

export default function MapView(){
    const center =   [ -70.606705, -33.416889 ];
    const zoom = 12;

    const classes = useStyles();
    

    useMapboxMap({"center": center, "zoom":zoom});    

    return <>
        <div id="map"  className={classes.map}></div>
    </>;

}