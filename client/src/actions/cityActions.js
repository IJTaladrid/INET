import axios from "axios";
import { GET_CITIES, CITIES_LOADING } from './types';

export const getCities = () => dispatch => {
    dispatch(setCitiesLoading());
    axios
        .get("api/cities")
        .then(res => 
            dispatch({
            type: GET_CITIES,
            payload: res.data
        })
    )
    
    /*const url = "http://localhost:5000/api/cities";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({cities: data, loading: false});*/
};

export const setCitiesLoading = () =>   {
    return  {
        type: CITIES_LOADING
    }
}