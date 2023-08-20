import axios, { AxiosResponse } from "axios";

const url =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

interface Coordinates {
  lat: number;
  lng: number;
}

interface PlaceData {
  // Place verilerine ait türleri burada tanımlayın
}

export const getPlacesData = async (
  type: string,
  sw: Coordinates,
  ne: Coordinates
): Promise<PlaceData[] | undefined> => {
  try {
    const response: AxiosResponse<{ data: PlaceData[] }> = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "X-RapidAPI-Key":
            "5b14cf801bmshb07f348456f1899p105586jsn7cb63372adbe",
        },
      }
    );

    return response.data.data;
    
  } catch (error) {
    console.error(`Fetch data Error: ${error}`);
    return undefined;
  }
};
