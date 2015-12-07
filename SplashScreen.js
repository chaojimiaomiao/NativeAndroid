'use strict';

var React = require('react-native');
var {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} = React;

var WINDOW_WIDTH = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

var SplashScreen = React.createClass({
  render: function() {
    var img;
    img = require('image!splash_solgan');

    return (
      <View style={styles.container}>
        <Image
          source={img}
          style={{
            width: WINDOW_WIDTH,
            height: WINDOW_HEIGHT,
          }}
        />
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  cover: {
    flex: 1,
    width: 200,
    height: 1,
  },
});

module.exports = SplashScreen;
