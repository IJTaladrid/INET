import React from 'react';
import Footer from './Footer.js';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import {getItineraries}  from "../actions/itineraryActions";
import PropTypes from "prop-types";

class Itinerary extends React.Component{
  constructor(props)  {
    super(props);
    this.state =  {
      itineraries: [],
      loading: true,
    }
  }
  
   componentDidMount() {
      this.props.getItineraries(this.props.match.params.id);
  }

  render()  {
    var { loading, itineraries} = this.props.itineraries;

    if(loading) {
      return (
        <div className="container">
          <div className="center"><h4>Loading...</h4></div>
          <Footer />
        </div>
      );
    }
    else {
      return (
        <div className="container">
          <div className="center">
            <h2>{this.props.match.params.ciudad}</h2>
            <h4>Available MYtineraries:</h4>
            <ul className="list-group">
              {itineraries.map(itinerary => (
              <li key={itinerary._id} className="list-group-item" >
                <div className="float left">
                  <img src={ itinerary.profile_picture } alt=""></img>
                  <h6>{ itinerary.username }</h6>
                </div>
                <div className="float right">
                  <h4>{ itinerary.title }</h4>
                  <h6>Rating: { itinerary.rating }</h6>
                  <h6>{ itinerary.duration } Hours</h6>
                  <h6>{ itinerary.price }</h6>
                  <h6>{ itinerary.hashtags.join(" ") }</h6>
                </div>
              </li>
              ))}
            </ul>
            <Link to={"/Cities"}>
              <p>Choose another city...</p>
            </Link>
          </div>
          <Footer />          
        </div>
      )
    }
  }
}

Itinerary.propTypes = {
  getItineraries: PropTypes.func.isRequired,
  itineraries: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return  {
    itineraries: state.itinerary
  }
}

export default connect(mapStateToProps, {getItineraries})(Itinerary)