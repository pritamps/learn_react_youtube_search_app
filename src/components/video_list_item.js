import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video; This is same as {video}

    return (
        <li onClick={() => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={video.snippet.thumbnails.default.url}/>
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>

    );
};

export default VideoListItem;