/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Navigator,
  ToolbarAndroid,
  Text,
  View,
} = React;

//var ToolbarAndroid = require('ToolbarAndroid');
var SplashScreen = require('./SplashScreen');
var MainScreen = require('./MainScreen');
var TimerMixin = require('react-timer-mixin');

var NativeAndroid = React.createClass({
  mixins: [TimerMixin],
  getInitialState: function() {
    return {
        splashed: false,
    };
  },

  componentDidMount: function() {
    this.setTimeout(
      () => {
        this.setState({splashed: true});
      },
      2000,
    );
  },

  render: function() {

    return (
      <MainScreen/>
    );

/*
    if (this.state.splashed) {
      return (
        <MainScreen />
      );
    } else {
      return (
        <SplashScreen />
      );
    }
*/
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
     backgroundColor : 'eee',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NativeAndroid', () => NativeAndroid);
