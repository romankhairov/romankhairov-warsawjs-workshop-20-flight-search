import React from 'react'
import FlightView from './FlightsView'

export default class FlightsFilter extends React.Component {
	constructor() {
		super();


	}
	// ...

	render() {
		return (
      <label>Min</label>
      <input
      value={min}
      type="number"/>
      <label>Max</label>
      <input
      value={max} 
      type="number"/>
    );
	}
}
}
