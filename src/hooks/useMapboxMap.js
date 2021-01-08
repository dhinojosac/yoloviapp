import {useLayoutEffect} from "react";
import mapboxgl from 'mapbox-gl';

export default function useMapboxMap(options){
    mapboxgl.accessToken = "pk.eyJ1IjoibmVncm80MTEiLCJhIjoiY2lnZ29wazc1ODRyNHY4bHUzYWtlMjRjOCJ9.uLxP3c0KMn9b6Ttgnvwjuw";

    const defaultOptions = {
        container: "map",
        style: 'mapbox://styles/mapbox/dark-v10',
        center:  [ 12.567898, 55.67583 ],
        zoom: 15
    };

    useLayoutEffect(() => {
        const map = new mapboxgl.Map({
            ...defaultOptions,
            ...options
        });


    }, []);
}