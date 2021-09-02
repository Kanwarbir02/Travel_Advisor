import axios from "axios";
import { Options } from "./apiDetails";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = Options;

export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL, options);

        return data;

    } catch (error) {
        console.log(error);
    }
}
