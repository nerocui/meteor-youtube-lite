import React from 'react';
import VideoListItem from './Video_List_Item';

const VideoList = (props) => {
    //do not use for loop, it's messy, use map instead
    const videoItems = props.videos.map((video) => {
        return (
          <VideoListItem
            className="list-group-item"
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}/>
          )//remember when you use multi line ES6 syntax,you
          // you have to use ()
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};


export default VideoList;