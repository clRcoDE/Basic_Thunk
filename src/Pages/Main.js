import React, { Component } from 'react'
import { Text, View , StyleSheet,TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {getUsers} from '../Services/Actions/Action'
class Main extends Component {

    changeStore=()=>{
        console.warn(this.props)
this.props.dispatch(getUsers())
    }
  render() {
    return (
      <View>
        <Text>{this.props.username}</Text>
<TouchableHighlight onPress={this.changeStore.bind(this)}><Text>Press</Text></TouchableHighlight>
      </View>
    )
  }
}


const mapStateToProps = state => {
    return {
      names:state.names
    };
  };
  //make this component available to the app
  export default connect(mapStateToProps)(Main);
