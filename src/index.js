import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyCrcyACEQEIHsXEzYA1E0UEdafcsC2u7b4"

// Create a new component -- this component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Put this component into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));