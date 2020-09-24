import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {
    constructor() {
        super()

        this.state = {
            email: "",
            password: ""
        }
    }

    userLogin = (email, password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(()=>{
          Alert.alert("Logged In Successfully")
        })
        .catch((error)=> {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        })
      }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Email Id"
                    keyboardType="email-address"
                    onChangeText={text => {
                        this.setState({email: text})
                    }}
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => {
                        this.setState({password: text})
                    }}
                />
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.userLogin(this.state.email, this.state.password)
                    this.props.navigation.navigate('')
                }}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Signup')
                }}>
                    <Text style={styles.buttonText}>Or Signup</Text>
                </TouchableOpacity>
            </View>
        )
    }
}