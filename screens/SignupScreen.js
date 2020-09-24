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
            password: "",
            confirmedPassword: ""
        }
    }

    userSignUp = (email, password, confirmedPassword) => {
        if(password !== confirmedPassword){
            return Alert.alert("password doesn't match\nCheck your password.")
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    return Alert.alert("Account Created Successfuly")
                })
                .catch((error) => {
                    console.log(error)
                })
        }
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
                
                <TextInput
                    style={styles.inputBox}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    onChangeText={text => {
                        this.setState({confirmedPassword: text})
                    }}
                />

                <TouchableOpacity style={styles.button} onPress={() => {
                    this.userSignUp(this.state.email, this.state.password, this.state.confirmedPassword)
                    this.props.navigation.navigate('Login')
                }}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {
                    this.props.navigation.navigate('Login')
                }}>
                    <Text style={styles.buttonText}>Or Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}