import React from 'react'
import Flight from './Flight'


export default class FlightsView extends React.Component {
    state = {
        flights: []
    }
    async componentDidMount() {
        const {from, to, departDate, returnDate} = this.props.searchData

        const url = 'https://warsawjs-flights-api.herokuapp.com/flights'

        const result = await fetch(`${url}/${departDate}/${returnDate}/${from}/${to}`)
        const flights = await result.json()

        this.setState({flights})
        // console.log(this.state.flights.map(
        //     flight => <Flight key={flight.price} flight={flight}/>
        // ));
        // console.log(this.state.flights)
    }
    render() {
      const min = 100; const max = 700;
      // let min = "min";
      // let max = "max";
      const filteredFlights = this.state.flights.filter(
        flight => min <= flight.price && flight.price <= max
      )

        return (
            <ul>
            {
            filteredFlights.map(
                flight => <Flight key={flight.id} flight={flight}/>
            )
            }
            </ul>
        )
    }
}
