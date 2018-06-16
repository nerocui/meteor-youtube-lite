import React from 'react';


const VideoDetail = ({video}) => {
	if(!video){
		return <div>Loading...</div>;
	}
	//the video detail are being rendered while the index.js still sending
	//out the request, so the videoId property will have to actually content
	//we need to perform a check first

	const videoId=video.id.videoId;
	const url = `http://www.youtube.com/embed/${videoId}`;

	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div className="details-title">{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;