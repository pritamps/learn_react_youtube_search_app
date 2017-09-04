import _ from 'lodash'
import React, {Component} from 'react';

import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyCrcyACEQEIHsXEzYA1E0UEdafcsC2u7b4"

// Create a new component -- this component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Surfboards');
    }

    videoSearch(term) {
        // Do the Youtube Search
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            // Will cause render() because state is set here
            this.setState({videos: videos, selectedVideo: videos[0]});
        });

    }

    render() {

        const videoSearch = _.debounce( (term) => {this.videoSearch(term)}, 300);

        return (
            <div >
                <SearchBar onSearchTermChange={videoSearch } />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect=
                    {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// Put this component into the DOM
ReactDOM.render(< App />, document.querySelector('.container'));