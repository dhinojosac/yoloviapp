import React from 'react';
import CustomAppBar from "./components/CustomAppBar.js";
import HomeView from './components/HomeView.js';
import Footer from './components/Footer.js';
import MapView from './components/MapView.js';

function App() {
  return (
    <>
    <CustomAppBar />
    <HomeView />
    <MapView />
    <Footer/>
    </>
  );


}

export default App;
