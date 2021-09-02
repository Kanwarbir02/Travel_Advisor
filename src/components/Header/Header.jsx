import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
    return ( 
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4">
                    Travel Advisor
                </Typography>
            </Toolbar>

            <Box display="flex">
                <Typography variant="h5">
                    Explore
                </Typography>

                <div style={{display:"flex"}}>
                    <div>
                        <div>
                            <SearchIcon />
                        </div>
                    </div>

                    <InputBase placeholder="Search..." />
                </div>
            </Box>
        </AppBar>
     );
}
 
export default Header;