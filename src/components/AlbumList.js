
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    // fetch('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then((response) => response.json())
    //   .then((responseData) => this.setState({ albums: responseData }));
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log(response));
  }
  
  render() {
    return (
      <View>
        <Text>Album List!!!!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
