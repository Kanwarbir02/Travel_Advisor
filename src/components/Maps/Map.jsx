import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import LocationOnOutlinedIcon from "@material-ui/icons";
import { key } from "./apiKey";
import useStyles from "./styles"

const Map = () => {

    const styles = useStyles();

    //For the instances on a mobile 
    // const isMobile = useMediaQuery("(min-width: 600px)")

    const coordinates = {lat: 0, lng: 0}

    return ( 
        <div className={styles.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys= {{key: key}} 
                defaultCenter={coordinates}
                center={coordinates} 
                defaultZoom={1} 
                margin={[50,50,50,50]} 
                options={""} 
                  >

            </GoogleMapReact>
        </div>
     );
}
 
export default Map;