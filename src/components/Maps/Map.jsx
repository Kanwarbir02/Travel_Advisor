import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import LocationOnOutlinedIcon from "@material-ui/icons";
import { key } from "./apiKey";
import useStyles from "./styles"

const Map = ({setCoordinates, setBounds, coordinates}) => {

    const styles = useStyles();

    //For the instances on a mobile 
    // const isMobile = useMediaQuery("(min-width: 600px)")

    // coordinates = {lat:0, lng: 0}

    

    return ( 
        <div className={styles.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys= {{key: key}} 
                defaultCenter={coordinates}
                center={coordinates} 
                defaultZoom={16} 
                margin={[50,50,50,50]} 
                options={""} 
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng})
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                }}
                  >

                  {console.log(coordinates)}

            </GoogleMapReact>
        </div>
     );
}
 
export default Map;