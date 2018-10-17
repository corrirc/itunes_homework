import React from 'react';
import MusicList from '../components/MusicList.js';

class MusicContainer extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      songs: []
    }
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

    fetch(url)
    .then(response => response.json())
    .then(songs => this.setState({songs: songs.feed.entry}))
  }

  render() {
    return (
      <div className="MusicRender">
        <h1>Songs</h1>
        <MusicList songs={this.state.songs} />
      </div>
    )
  }

}

export default MusicContainer;
