// Index.ios.js - place code in here for IOS!

// Import a library 
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
);

// Render it to the device
// the first arg albums refers to the name of the app
AppRegistry.registerComponent('albums', () => App);
