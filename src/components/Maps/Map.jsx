import GoogleMapReact from "google-map-react";
import { Paper, Typography, UseMediaQuery } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import LocationOutlinedIcon from "@material-ui/icons";

const Map = () => {

    //For the instances on a mobile 
    const isMobile = UseMediaQuery("(min-width: 600px)")

    const coordinates = {lat: 0, lng: 0}

    return ( 
        <div>
            <GoogleMapReact 
                bootstrapURLKeys= {keys= ""} 
                defaultCenter={coordinates}
                center={coordinates} 
                defaultZoom={14} 
                margin={[50,50,50,50]} 
                options={""} 
                onChange={""}
                onChildClick={""}  >

            </GoogleMapReact>
        </div>
     );
}
 
export default Map;