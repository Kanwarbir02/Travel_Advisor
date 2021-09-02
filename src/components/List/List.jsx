import { Typography, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import useStyles from "./styles"

const List = () => {

    const styles = useStyles();

    return ( 
        <div className={styles.container}>
            <Typography variant="h4">Travel Destinations </Typography>
                <FormControl className={styles.formControl}>
                    <InputLabel>Type</InputLabel>
                    <Select >
                        <MenuItem>Restaraunts</MenuItem>
                        <MenuItem>Hotels</MenuItem>
                        <MenuItem>Tourist Spots</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={styles.formControl}>
                    <InputLabel>Above</InputLabel>
                    <Select>
                        <MenuItem>Above 3.0</MenuItem>
                        <MenuItem>Above 4.0</MenuItem>
                        <MenuItem>Above 5.0</MenuItem>
                    </Select>
                </FormControl>
            
        </div>
     );
}
 
export default List;