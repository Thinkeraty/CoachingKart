import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert, TextInput} from 'react-native';
import db from '../config'

export default class SearchHeader extends Component{
  constructor(props){
    super(props)
    this.state={
      value:4
    }
  }

// getNumberOfUnreadNotifications(){
//   db.collection('all_notifications').where('notification_status','==',"unread")
//   .onSnapshot((snapshot)=>{
//     var unreadNotifications = snapshot.docs.map((doc) => doc.data())
//     this.setState({
//       value: unreadNotifications.length
//     })
//   })
// }

// componentDidMount(){
//   this.getNumberOfUnreadNotifications()
// }


 BellIconWithBadge=()=>{
    return(
      <View>
        <Icon name='bell' type='font-awesome' color='#fff' size={25}
          onPress={() =>this.props.navigation.navigate('Notification')} containerStyle={{marginBottom: 10}} 
        />
        <Badge
            value={this.state.value}
            containerStyle={{ position: 'absolute', top: -4, right: -4 }}
        />
      </View>
    )
  }

  render(){
    return(
        <Header
          leftComponent={<Icon name='bars' type='font-awesome' color='#fff' containerStyle={{marginBottom: 10}} onPress={() => /*this.props.navigation.toggleDrawer()*/props.navigation.dispatch(DrawerActions.toggleDrawer())}/>}
          centerComponent={<TextInput style={{borderWidth: 2, height: 60, width: 270, paddingLeft: 10, borderRadius: 5, backgroundColor: "white"}} placeholder="Enter Search Query" onChangeText={this.props.onChangeText}/>}
          rightComponent={<this.BellIconWithBadge {...this.props}/>}
          backgroundColor = "#ff5400"
          containerStyle={{height: 120}}
        />

)
}

}