import axios from "axios";
import { options } from "./apiDetails";

const URl = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

const options = options;

const getPlacesData = async () => {
    try {
        const {data} = await axios.get(URL, options)
    } catch (error) {
        console.log(error);
    }
}