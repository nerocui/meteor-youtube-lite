
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './Search_Bar';
import TopBar from './Top_Bar';
import YTSearch from 'youtube-api-search';
import VideoList from './Video_List';
import VideoDetail from './Video_Detail';
const API_KEY = 'AIzaSyDqleXOxvEjSMgG7eyr-h-2sADU6DyhGJ4';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
          videos:[],
          selectedVideo: null
        };
        this.VideoSearch('cat videos');
    }

  VideoSearch(term){
    YTSearch({key:API_KEY, term: term}, (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }


    render(){
        document.body.style = 'background:linear-gradient(to bottom right, #f9e79f, #5d6d7e);height: 100%; margin: 0; background-repeat: no-repeat; background-attachment: fixed;';

        return(
            <div>
                <SearchBar onSearch={term => this.VideoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    className="list-group"
                  onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                  videos={this.state.videos}/>
            </div>
        );
    }
}
