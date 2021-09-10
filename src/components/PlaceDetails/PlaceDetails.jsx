import { Card, Typography, CardMedia, CardContent } from "@material-ui/core";

const PlaceDetails = ({place}) => {
    // console.log(place);
    return ( 
        <div>
            <Card>
                <CardMedia 
                    image={place.photo ? place.photo.images.large.url: "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                />

                <CardContent>
                    <Typography variant="h5">{place.name}</Typography>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default PlaceDetails;