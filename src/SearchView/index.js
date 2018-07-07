import React from 'react'

class SearchView extends React.Component {
    state = {
      state = {
        from: 'WAW',
        to: 'JFK',
        departDate: '2018-05-12',
        returnDate: '2018-05-21'
      }
      onChange = (e) => {
     this.setState({[e.target.id] : e.target.value }, () => {
       console.log('po:',this.state);
     });

    }
    onSubmit = e => {
        e.preventDefault()
        const {to, from, departDate, returnDate} this.setState

        if (!(to && from && departDate && returnDate)) {
          return
        }

        this.props.onSearch({
          to, from, departDate, returnDate
        })
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
