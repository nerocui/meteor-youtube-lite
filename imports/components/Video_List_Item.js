import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	//const videoItems = probs.videos;
	//using {video} in parameter is completely
	//the same as using prop and then do the line
	//above, the curly braces is ES6 syntax will
	//access the prop's property video

	const imageUrl = video.snippet.thumbnails.default.url;
	const title = video.snippet.title;
	console.log(imageUrl);
    return (
    	<li onClick={() => onVideoSelect(video)} className="list-group-item">
    		<div className="vido-list media">
    			<div className="media-left">
    				<img className="media-object" src={imageUrl}/>
    			</div>

    			<div className="media-body">
    				<div className="media-heading"> {title}</div>
    			</div>
    		</div>
    	</li>

    );
};

export default VideoListItem;