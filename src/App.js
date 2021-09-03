import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Maps/Map";

import { useEffect, useState } from "react";

import { getPlacesData } from "./api/index";
import { CssBaseline, Grid } from "@material-ui/core";

const App = () =>  {

  const [places, setPlaces] = useState([]); 

  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data);
        setPlaces(data);
      })
  }, [])

  return (
    <div>
      <CssBaseline />
        <Header />
      <Grid container spacing={4} style={{width: "100%"}}>
        <Grid item xs={12} md={4} style={{}}>
            <List />
        </Grid>

        <Grid item xs={12} md={8} style={{}}>
          <Map />
        </Grid>

      </Grid>  
        
        
    </div>
    

  );
}

export default App;
