'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  Image,
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Dimensions,
} = React;


var SwipeRefreshLayoutAndroid = require('./SwipeRereshLayout');

var MainScreen = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  onRefresh: function() {
	  
  },
  render: function() {
    return ( 
	   <View>
	      <SwipeRefreshLayoutAndroid
            ref={(swipeRefreshLayout) => { this.swipeRefreshLayout = swipeRefreshLayout; }}
            onRefresh={this.onRefresh}>
          </SwipeRefreshLayoutAndroid>
          
		  // ListView wraps ScrollView and so takes on its properties.
		  // With that in mind you can use the ScrollView's contentContainerStyle prop to style the items.
          <ListView
		  	contentContainerStyle={styles.list}
		  	dataSource={this.state.dataSource}
		  	renderRow={this._renderRow}
		  />
      </View>
    );
  },

  _renderRow: function(rowData: array, sectionID: number, rowID: number) {
    return (
		<TouchableHighlight>
        <View>
          <View style={styles.row}>
          	<View style={styles.usrView}>
          		<Image source={require('./thumbnails/avatar.png')} style={styles.avatarImage} />
          		{/* 用户名 */}
          		<View style={{flexDirection: 'column'}}>
		  			<Text style={{fontSize:13, marginTop: 6}} >
		  				小百姓
		  			</Text>
		  			<Text style={{fontSize:12, color: '#FF0066'}} >
		  				约50米
		  			</Text>
		  		</View>
          	</View>
          	
            <Image style={styles.thumb} source={rowData[1]} />
            <Text style={styles.text}>
              {rowData[0]}
            </Text>
            <Text style={styles.priceText}>
              {rowData[2]}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var i = 0; i < IMAGES.length *2; i++) {
      dataBlob.push([NAMES[i%NAMES.length], IMAGES[i%IMAGES.length], PRICES[i%IMAGES.length]]);
    }
    return dataBlob;
  },
});

var styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor : '#eee',
  },
  row: {
    justifyContent: 'center',
    margin: 6,
    marginRight: 0,
    width: 162,
    height: 240,
    backgroundColor : '#fff',
  },
  //写用户的view
  usrView: {
	flex: 1,
    width: 162,
    height: 80,
	flexDirection: 'row',
  },
  avatarImage: {
    width: 30,
    height: 30,
    margin: 8,
  },
  
  thumb: {
	marginTop: 16,
    width: 162,
    height: 140,
  },
  text: {
    flex: 1,
    marginTop: 6,
    marginLeft: 10,
    fontSize: 16,
  },
  priceText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: '#FF0066',
  },
});

var IMAGES = [
	require('./thumbnails/ta.png'),
	require('./thumbnails/tb.png'),
	require('./thumbnails/tc.png'),
	require('./thumbnails/td.png'),
	require('./thumbnails/te.png'),
	require('./thumbnails/tf.png'),
	require('./thumbnails/tg.png'),
	require('./thumbnails/th.png'),
];
var NAMES = [
  '转让护手霜',
  '绵羊油英国带回',
  '正面盖子的颜色',
  '一串手串',
  'Soo Young',
  'Sunny',
  'Taeyeon',
  'Tiffany',
];

var PRICES = [
  '30元',
  '150元',
  '2000元',
  '580元',
  '6元',
  '15元',
  '60元',
  '3元',
];

module.exports = MainScreen;
