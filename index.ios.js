// Index.ios.js - place code in here for IOS!

// Import a library 
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
    <Header headerText={'Albums'} />
);

// Render it to the device
// the first arg albums refers to the name of the app
AppRegistry.registerComponent('albums', () => App);
