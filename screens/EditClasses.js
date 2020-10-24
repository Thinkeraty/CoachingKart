import React ,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Alert, TextInput} from 'react-native';
import{Card,Header,Icon} from 'react-native-elements';

import AppHeader from '../components/AppHeader'

import firebase from 'firebase';
import db from '../config.js';
import { ScrollView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize'

export default class EditClass extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userId: firebase.auth().currentUser.email,
            classEmail      : this.props.navigation.getParam('details')["class_email"],
            className       : this.props.navigation.getParam('details')["class_name"],
            classContact    : this.props.navigation.getParam('details')["class_contact"],
            classAddress    : this.props.navigation.getParam('details')["class_address"],
            classStandard   : this.props.navigation.getParam('details')["class_standard"],   
            classSubject    : this.props.navigation.getParam('details')["class_subject"],
            classId         : this.props.navigation.getParam('details')["class_id"],
            docId: ''
        }
    }

    updateClassDetails=()=>{
        db.collection('classes').doc(this.state.docId)
        .update({
          "class_name": this.state.className,
          "class_subject" : this.state.className,
          "class_address"   : this.state.classAddress,
          "class_contact"    : this.state.classContact,
          "class_standard"  : this.state.classStandard
        })
    
        Alert.alert("Updated Successfully")
    
      }
    
      getDocId=()=>{
        db.collection('classes').where('class_id','==', this.state.classId).get()
        .then(snapshot => {
          snapshot.forEach(doc => {
          var data = doc.data()
            this.setState({
              docId: doc.id
            })
          });
        })
      }

    componentDidMount() {
        this.getDocId()
    }
    
    render() {
        return(
            <View style={styles.container}>
            <ScrollView>
                <View style={{flex:0.1}}>
                <Header
                    leftComponent ={<Icon name='arrow-left' type='feather' color='#696969'  onPress={() => this.props.navigation.navigate('TeacherClasses') }/>}
                    centerComponent={{ text: "Edit Info", style: { color: '#90A5A9', fontSize:30,fontWeight:"bold", } }}
                    backgroundColor = "#eaf8fe"
                    containerStyle={{marginTop: 5, height: 110}}
                />
                </View> 
                    <View style={{flex:0.3}}>
                        <Card
                            title={this.props.navigation.getParam('details')["class_name"]}
                            titleStyle= {{fontSize : 20}}
                        >
                        <Card>
                        <Text style={{fontWeight:'bold'}}>Class Name:</Text>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Class Name"}
                            maxLength ={30}
                            containerStyle={{marginBottom: RFValue(25), marginTop: RFValue(30)}}
                            onChangeText={(text)=>{
                                this.setState({
                                className: text
                            })
                            }}
                            value ={this.state.className}
                        />
                        </Card>
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Subject:</Text>
                            <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Subject"}
                            maxLength ={20}
                            containerStyle={{marginBottom: RFValue(25), marginTop: RFValue(30)}}
                            onChangeText={(text)=>{
                                this.setState({
                                classSubject: text
                            })
                            }}
                            value ={this.state.classSubject}
                        />
                        </Card>
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Class(s):</Text>
                            <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Standard"}
                            keyboardType={'numeric'}
                            maxLength ={2}
                            containerStyle={{marginBottom: RFValue(25), marginTop: RFValue(30)}}
                            onChangeText={(text)=>{
                                this.setState({
                                classStandard: text
                            })
                            }}
                            value ={this.state.classStandard}
                        />
                        </Card>
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Location:</Text>
                            <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Address"}
                            maxLength ={20}
                            containerStyle={{marginBottom: RFValue(25), marginTop: RFValue(30)}}
                            onChangeText={(text)=>{
                                this.setState({
                                classAddress: text
                            })
                            }}
                            value ={this.state.classAddress}
                        />
                        </Card>
                        <Card>
                            <Text style={{fontWeight:'bold'}}>Contact:</Text>
                            <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Contact Number"}
                            keyboardType={'numeric'}
                            maxLength ={10}
                            containerStyle={{marginBottom: RFValue(25), marginTop: RFValue(30)}}
                            onChangeText={(text)=>{
                                this.setState({
                                classContact: text
                            })
                            }}
                            value ={this.state.classContact}
                        />
                        </Card>
                        <TouchableOpacity style={styles.button} onPress={() => { this.updateClassDetails() }}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
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
      marginTop: 20,
      marginLeft: 50,
      backgroundColor: 'orange',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1
      },
      elevation : 16
    },
    buttonText: {
        color:'#ffff',
        fontWeight:'200',
        fontSize:18
    }
  })