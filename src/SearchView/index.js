import React from 'react'

export default class SearchView extends React.Component {
    state = {
        from: 'WAW',
        to: 'JFK',
        departDate: '2018-05-21',
        returnDate: '2018-05-28'
    }
    onFormChange = propertyToUpdate => e => {
        this.setState({
            [propertyToUpdate]: e.target.value
        })
    }
    onSubmit = e => {
        e.preventDefault()
        this.props.onSearch(this.state)
    }
    render() {
        const {to, from, departDate, returnDate} = this.state

        return (
            <form onSubmit={this.onSubmit}>
                <label>From</label>
                <select value={from} onChange={this.onFormChange('from')}>
                    <option>WAW</option>
                    <option>JFK</option>
                </select>

                <label>To</label>
                <select value={to} onChange={this.onFormChange('to')}>
                    <option>WAW</option>
                    <option>JFK</option>
                </select>

                <label>Depart Date</label>
                <input
                    value={departDate}
                    onChange={this.onFormChange('departDate')}
                    type='date'
                />

                <label>Return Date</label>
                <input
                    value={returnDate}
                    onChange={this.onFormChange('returnDate')}
                    type='date'
                />

                <button type='submit'>Search</button>
            </form>
        )
    }
}