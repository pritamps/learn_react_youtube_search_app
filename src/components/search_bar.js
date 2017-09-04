/* Search bar at the top
*/

import React, {Component} from 'react';

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
        // Define onChange handler for the input Set state on input change Input is a
        // controlled component
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

// Allow index.js to access the SearchBar class instance
export default SearchBar
