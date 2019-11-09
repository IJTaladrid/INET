import React from 'react';
import Footer from './Footer.js';
import { connect } from "react-redux";
import { getCities } from "../actions/cityActions";
import PropTypes from "prop-types";

class Cities extends React.Component{
    componentDidMount() {
        /*const url = "http://localhost:5000/api/cities";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({cities: data, loading: false});*/
        this.props.getCities();
    }

    render()    {
        if (this.props.loading) {
            return <div>loading...</div>;
        }
        if (!this.props.cities.length)  {
            return <div>Didn´t get a city</div>;
        }

        const citiesJsx = this.props.cities.map(city =>(
            <div key={city._id}>
                <div>{"City: " + city.name + " | Country: " + city.country}</div>
            </div>
        ));

        return  (
            <div className="container">
                <h4 className="center">Cities</h4>
                <div className="center">
                    {citiesJsx}
                </div>
                <Footer />
            </div>
        );
    }
}

Cities.propTypes =  {
    getCities: PropTypes.func.isRequired,
    city: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return  {
        cities: state.cities
    }
}

export default connect(mapStateToProps, {getCities})(Cities);