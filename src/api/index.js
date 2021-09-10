import axios from "axios";
// import { Options } from "./apiDetails";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// const options = Options;

export const getPlacesData = async (ne, sw) => {
    try {
        const {data: {data}} = await axios.get(URL, {
            params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '8cb5d27519msha697911e80d08b5p106054jsncc8ca630eaab'
          }});

        return data;

    } catch (error) {
        console.log(error);
    }
}
