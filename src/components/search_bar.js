/* Search bar at the top
*/

import React, { Component } from 'react';

// Define the search class component
class SearchBar extends Component {

    /*Default constructor*/
    constructor(props) {
        super(props);

        // Initiliase state with whatever properties we want to maintain
        this.state = {
            term: ''
        };
    }

    /* Every class needs a render() method
    */
    render() {
        // Define onChange handler for the input
        // Set state on input change
        // Input is a controlled component
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })
                    } />
            </div>
        );
    }
}

// Allow index.js to access the SearchBar class instance
export default SearchBar
