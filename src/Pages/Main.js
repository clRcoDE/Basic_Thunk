import React, { Component } from 'react'
import { Text, View , StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {getUsers,loadData} from '../Services/Actions/Action'
class Main extends Component {

    changeStore=()=>{
        // console.warn(this.props)
this.props.dispatch(loadData())
    }
  render() {
    return (
      <View style={styles.container}>
<TouchableHighlight style={styles.buttonWrapper} onPress={this.changeStore.bind(this)}><Text>Press To Fetch With Thunk</Text></TouchableHighlight>

        {/* <Text>{this.props.names}</Text> */}
        <ScrollView >

        <View style={styles.lister}>
        {this.props.names.map((item,index)=><Text  key={index}>{item}</Text>)}

        
        </View>
        </ScrollView>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1
  },
  buttonWrapper:{
    height:200,
    backgroundColor:'#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lister:{
    alignItems:'center',
    padding: 25,
  }

})

const mapStateToProps = state => {
    return {
      names:state.names
    };
  };
  //make this component available to the app
  export default connect(mapStateToProps)(Main);
