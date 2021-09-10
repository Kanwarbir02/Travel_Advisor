import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Maps/Map";

import { useEffect, useState } from "react";

import { getPlacesData } from "./api/index";
import { CssBaseline, Grid } from "@material-ui/core";

const App = () =>  {

  const [places, setPlaces] = useState([]); 
  const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});
  const [bounds, setBounds] = useState({ne: 0, sw: 0});

//Setting up user's location as the default location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);


  useEffect(() => {

    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {

        // console.log(data);
        setPlaces(data);
      
      })
  }, [coordinates, bounds])

  return (
    <div>
      <CssBaseline />
        <Header />
      <Grid container spacing={4} style={{width: "100%"}}>
        <Grid item xs={12} md={4} style={{}}>
            <List places={places} />
        </Grid>

        <Grid item xs={12} md={8} style={{}}>
          <Map setCoordinates = {setCoordinates} setBounds = {setBounds} coordinates = {coordinates} />
        </Grid>

      </Grid>  
        
        
    </div>
    

  );
}

export default App;
