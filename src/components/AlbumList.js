
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // Step 1: initial, empty state
  state = { albums: [] };
  
  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then((response) => response.json())
    //   .then((responseData) => this.setState({ albums: responseData }));

    // the setState method is provided by the Component class.

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    // Step 2: set state
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
  return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
   );
  }
  
  render() {
    console.log(this.state);
    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

export default AlbumList;
