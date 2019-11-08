import React from 'react';
import Footer from './Footer.js';


export default class Cities extends React.Component{
    state = {
        loading: true,
        cities: []
    };

    async componentDidMount() {
        const url = "http://localhost:5000/api/cities";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({cities: data, loading: false});
    }

    render()    {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.cities.length)  {
            return <div>Didn´t get a city</div>;
        }

        const citiesJsx = this.state.cities.map(city =>(
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
