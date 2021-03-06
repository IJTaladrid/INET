import React from 'react';
import Header from "./Header";
import Footer from './Footer.js';
import { connect } from "react-redux";
import { getCities } from "../actions/cityActions";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


class Cities extends React.Component{
    constructor(props)  {
        super(props);
        this.state = {
            cities: [],
            loading: true,
            search: ""
        };
    }

    updateSearch(event) {
        this.setState({ search: event.target.value });
    }

    async componentDidMount() {
       await this.props.getCities();
    }

    render()    {
        var { loading, cities } = this.props.cities;

        let filteredCities = cities.filter (city => {
            return(
                city.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            );
        });

        if (loading) {
            return (
                <div className="container">
                    <div className="center"><h4>Loading...</h4></div>
                    <Footer />
                </div>
            );
        } 
        else {
            return (
                <div className="container center">
                    <Header />
                    <h3>Cities</h3>
                    <div>
                        <input
                            type = "text"
                            value = { this.state.search }
                            onChange = { this.updateSearch.bind(this) }
                        />
                        <ul className="list-group">
                            {filteredCities.map(city => (
                                <Link to={"/Itinerary/"+ city.name + '/' + city._id}>  
                                    <li key={city.name} className="list-group-item">
                                        { city.name + " - " + city.country }
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                    <Footer />
                 </div>
            );
        }
    }
}

Cities.propTypes =  {
    getCities: PropTypes.func.isRequired,
    cities: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return  {
        cities: state.city
    }
}

export default connect(mapStateToProps, {getCities})(Cities);