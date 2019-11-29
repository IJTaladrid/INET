import { GET_ITINERARIES, ITINERARIES_LOADING } from "./types";

export const getItineraries = (id) => dispatch => {
  fetch(`http://localhost:5000/api/itinerary/${id}`)
    .then(resp => resp.json())
    .then((data)=>{
      console.log(data)
      dispatch({ type: GET_ITINERARIES, payload: data})
    })
    .catch((err)=>console.log(err))
}

export const setItinerariesLoading = () => {
  return  {
    type: ITINERARIES_LOADING
  }
}
