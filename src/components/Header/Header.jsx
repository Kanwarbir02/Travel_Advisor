import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = () => {

    const styles = useStyles()

    return ( 
        <AppBar position="static" >
            <Toolbar className={styles.toolbar}>
                <Typography variant="h5" className={styles.title}>
                    Travel Advisor
                </Typography>
            

            <Box display="flex">
                <Typography variant="h6" className={styles.title}>
                    Explore
                </Typography>

                {/* <div> */}
                    <div className={styles.search}>
                        <div className={styles.searchIcon}>
                            <SearchIcon />
                        </div>
                    </div>

                    <InputBase placeholder="Search..." classes={{ root: styles.inputRoot, input: styles.inputInput }}/>
                {/* </div> */}
            </Box>

            </Toolbar>
        </AppBar>
     );
}
 
export default Header;