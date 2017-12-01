/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import TrackPlayer from 'react-native-track-player';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(){
    super()
  }
  componentWillMount(){
    
  }
  playStream(){
    TrackPlayer.setupPlayer().then(()=> {
       TrackPlayer.add({
        id: 'trackId',
        url : 'http://5.135.142.83:8300/stream',
        title: 'Online Stream'
      });
      TrackPlayer.play();
    })
  }
  stopStream(){
    TrackPlayer.stop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
          </Text>
          <Button
            onPress={this.playStream}
            title="Play radio"
            color="#841584"
            style={styles.button}
          />
          <Button
            onPress={this.stopStream}
            title="Stop radio"
            color="#841584"
            style={styles.button}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button:{
    padding:50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
