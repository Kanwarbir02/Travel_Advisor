import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Maps/Map";

import { CssBaseline, Grid } from "@material-ui/core";

const App = () =>  {
  return (
    <div>
      <CssBaseline />
        <Header />
      <Grid container spacing={4} style={{width: "100%"}}>
        <Grid item xs={12} md={4} style={{background:"blue"}}>
            <List />
        </Grid>

        <Grid item xs={12} md={8} style={{background:"yellow"}}>
          <Map />
        </Grid>

      </Grid>  
        
        
    </div>
    

  );
}

export default App;
