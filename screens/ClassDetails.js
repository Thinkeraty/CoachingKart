import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Alert} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';

import AppHeader from '../components/AppHeader'

import firebase from 'firebase';
import db from '../config.js';
import { ScrollView } from 'react-native-gesture-handler';

export default class ClassDetails extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userId: firebase.auth().currentUser.email,
            teacherId       : this.props.navigation.getParam('details')["class_email"],
            teacherName     : '',
            teacherBio      : '',

            className       : this.props.navigation.getParam('details')["class_name"],
            classContact    : this.props.navigation.getParam('details')["class_contact"],
            classAddress    : this.props.navigation.getParam('details')["class_address"],
            classStandard   : this.props.navigation.getParam('details')["class_standard"],   
            classSubject    : this.props.navigation.getParam('details')["class_subject"],
        }
    }

    getTeacherDetails = () => {
        db.collection('users').where('email_id', '==', this.state.teacherId).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    this.setState({
                        teacherName: doc.data().first_name + ' ' + doc.data().last_name,
                        teacherBio: doc.data().user_bio
                    })
                })
            })
    }

    componentDidMount() {
        this.getTeacherDetails()
    }
    
    render() {
        return(
            <View style={styles.container}>
            <ScrollView>
                <View style={{flex:0.1}}>
                <Header
                    leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.goBack()}/>}
                    centerComponent={{ text: "Class Details", style: { color: '#90A5A9', fontSize:30,fontWeight:"bold", } }}
                    backgroundColor = "#eaf8fe"
                    containerStyle={{marginTop: 5, height: 110}}
                />
                </View>
                    <View style={{flex:0.3}}>
                        <Card
                            title={"Class Information"}
                            titleStyle= {{fontSize : 20}}
                        >
                        <Card >
                        <Text style={{fontWeight:'bold'}}>Class Name : {this.state.className}</Text>
                        </Card>
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Subject: {this.state.classSubject}</Text>
                        </Card>
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Class(s): {this.state.classStandard}</Text>
                        </Card>
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Location: {"\n"}{this.state.classAddress}</Text>
                        </Card>
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Contact: {this.state.classContact}</Text>
                        </Card>
                        </Card>
                    </View>
                    <View style={{flex:0.3, marginTop: 20, marginBottom: 50}}>
                    <Card
                    title={"The Teacher"}
                    titleStyle= {{fontSize : 20}}
                    >
                    <Card>
                        <Text style={{fontWeight:'bold'}}>Name: {this.state.teacherName}</Text>
                    </Card>
                    <Card>
                        <Text style={{fontWeight:'bold'}}>About: {"\n"}{this.state.teacherBio}</Text>
                    </Card>
                    </Card>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    buttonContainer : {
      flex:0.3,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:200,
      height:50,
      justifyContent:'center',
      alignItems : 'center',
      borderRadius: 10,
      backgroundColor: 'orange',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8
      },
      elevation : 16
    }
  })