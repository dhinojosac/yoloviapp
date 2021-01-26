import React from 'react';
import CustomAppBar from "./components/CustomAppBar.js";
import HomeView from './components/HomeView.js';
import Footer from './components/Footer.js';
import MapView from './components/MapView.js';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import DogDetailView from './components/DogDetailView.js';
import AddDogForm from './components/AddDogForm.js';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <CustomAppBar />
        <main>
           <Switch>
            <Route exact path="/newdog">
              <AddDogForm />
            </Route>
            <Route exact path="/dogs/:id">
              <DogDetailView />
            </Route>
            <Route exact path="/">
              <HomeView />
            </Route>
          </Switch>
        </main>
      
      <Footer/>
    </BrowserRouter>
    
    
    

    
    </>
  );


}

export default App;
