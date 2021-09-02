import { Typography, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useState } from "react";
import useStyles from "./styles"

const List = () => {

    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");

    const styles = useStyles();

    return ( 
        <div className={styles.container}>
            <Typography variant="h4">Travel Destinations </Typography>

                <FormControl className={styles.formControl}>

                    <InputLabel>Type</InputLabel>

                    <Select value={type} onChange={(e)=> setType(e.target.value)}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                        <MenuItem value="tourSpots">Tourist Spots</MenuItem>
                        {console.log(type)}
                    </Select>

                </FormControl>

                <FormControl className={styles.formControl}>

                    <InputLabel>Rating</InputLabel>

                    <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                        <MenuItem value={3}>Above 3.0</MenuItem>
                        <MenuItem value={4}>Above 4.0</MenuItem>
                        <MenuItem value={4.5}>Above 4.5</MenuItem>
                    </Select>
                </FormControl>
            
        </div>
     );
}
 
export default List;