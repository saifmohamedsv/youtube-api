import React, { Component } from "react";
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import youtubeAPI from "../apis";
import VideoDetail from "./VideoDetail";
class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit("reactjs");
  }

  onSearchSubmit = async (term) => {
    const data = await youtubeAPI.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: data.data.items,
      selectedVideo: data.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
