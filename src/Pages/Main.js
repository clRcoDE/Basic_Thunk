import React, { Component } from 'react'
import { Text, View , StyleSheet,TouchableHighlight} from 'react-native'
import {connect} from 'react-redux'
import {getUsers,loadData} from '../Services/Actions/Action'
class Main extends Component {

    changeStore=()=>{
        // console.warn(this.props)
this.props.dispatch(loadData())
    }
  render() {
    return (
      <View>
<TouchableHighlight onPress={this.changeStore.bind(this)}><Text>Press</Text></TouchableHighlight>

        {/* <Text>{this.props.names}</Text> */}
        {this.props.names.map((item,index)=><Text  key={index}>{item}</Text>)}
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
