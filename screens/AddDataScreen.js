import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
} from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class AddDataScreen extends React.Component {
    constructor() {
        super()

        this.state = {

            // userId: firebase.auth().currentUser.email,

            isTeacherModalVisible: true,
            isStudentModalVisible: false,

            teacherFirstName: "",
            teacherLastName: "",
            teacherContact: "",
            teacherAddress: ""
        }
    }

    saveData = () => {
        var user = firebase.auth().currentUser.email
        db.collection('teachers').add({
            "first_name": this.state.teacherFirstName,
            "last_name": this.state.teacherLastName,
            "contact": this.state.teacherContact,
            "address": this.state.teacherAddress,
        })
        .then((response) => {
            console.log(response)
            Alert.alert('Data added successfully')
            this.props.navigation.navigate('UserHomeScreen')
        })
        .catch((err) => {console.log(err)})
    }

    showTeacherModal = () => {
        return(
            <Modal
            animationType="fade"
            transparent={true}
            visible={true}>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Registration</Text>
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"First Name"}
                            maxLength ={8}
                            onChangeText={(text)=>{
                                this.setState({
                                teacherFirstName: text
                            })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Last Name"}
                            maxLength ={8}
                            onChangeText={(text)=>{
                                this.setState({
                                teacherLastName: text
                            })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Contact"}
                            maxLength ={10}
                            keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                this.setState({
                                teacherContact: text
                            })
                            }}
                        />
                        <TextInput
                            style={styles.formTextInput}
                            placeholder ={"Address"}
                            multiline = {true}
                            onChangeText={(text)=>{
                                this.setState({
                                teacherAddress: text
                            })
                            }}
                        />
                         <TouchableOpacity
                            style={styles.registerButton}
                            onPress={()=>
                                this.saveData()
                            }>
                            <Text style={styles.registerButtonText}>Register</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.cancelButton}
                            onPress={()=>this.setState({"isModalVisible":false})}
                        >
                        <Text style={{color:'#ff5722'}}>Cancel</Text>
                        </TouchableOpacity>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Modal>
        )
    }

    showStudentModal = () => {

    }
    
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity>
                        {/* <Image source={} /> */}
                        <Text>Student</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity>
                        {/* <Image source={} /> */}
                        <Text>Teacher</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})