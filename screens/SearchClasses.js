import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Alert,
    ScrollView} from 'react-native';

import SearchHeader from '../components/SearchHeader'

import db from '../config';
import firebase from 'firebase';

export default class SearchClasses extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allClasses: [],
            lastVisibleClass: null,
            search: ""
        }
    }

    fetchMoreClasses = async () => {
        var text = this.state.search.toUpperCase()
        var enteredText = text.split("")

        if(enteredText[0].toUpperCase === "M" /* Maths */ ) {
            const query = await db.collection('classes').where('class_subject', '==', text)
            .startAfter(this.state.lastVisibleClass)
            .limit(10)
            .get()

            query.docs.map((doc) => {
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(enteredText[0].toUpperCase === "P" /* Physics */ ) {
            const query = await db.collection('classes').where('class_subject', '==', text)
            .startAfter(this.state.lastVisibleClass)
            .limit(10)
            .get()

            query.docs.map((doc) => {
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(enteredText[0].toUpperCase === "C" /* Chemistry */ ) {
            const query = await db.collection('users').where('subject', '==', text)
            .startAfter(this.state.lastVisibleClass)
            .limit(10)
            .get()

            query.docs.map((doc) => {
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        }else if(enteredText[0].toUpperCase === "B" /* Biology */) {
            const query = await db.collection('classes').where('class_subject', '==', text)
            .startAfter(this.state.lastVisibleClass)
            .limit(10)
            .get()

            query.docs.map((doc) => {
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        }
    }
    
    searchClasses = async (text) => {

        if(text.toUpperCase().includes("COM")){
            var subject = "Computer"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("MAT")){
            var subject = "Maths"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("PHY")){
            var subject = "Physics"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("CHE")){
            var subject = "Chemistry"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("BIO")){
            var subject = "Biology"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("ENG")){
            var subject = "English"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("HIN")){
            var subject = "Hindi"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("MUS")){
            var subject = "Music"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("ART")){
            var subject = "Art"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("GEO")){
            var subject = "Geography"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("HIS")){
            var subject = "History"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        } else if(text.toUpperCase().includes("CIV") || text.toUpperCase().includes("POL") ){
            var subject = "Civics"
            const classes = await db.collection("classes").where("class_subject","==",subject).get()
            classes.docs.map((doc) => {
                console.log(doc.data())
                this.setState({
                    allClasses: [...this.state.allClasses, doc.data()],
                    lastVisibleClass: doc
                })
            })
        }
    }

    componentDidMount = async() => {
        const query = await db.collection('classes').limit(10).get()
        query.docs.map((doc) => {
            this.setState({
                allClasses: [],
                lastVisibleClass: doc
            })
        })
    }

    render() {
        return(
            <View style={{flex: 1, alignItems: 'center', textAlign: 'center'}}>
            <SearchHeader title="Add Class" navigation={this.props.navigation} style={{marginTop: -20, paddingTop: 230}} onChangeText={(text) => {this.setState({search: text}); this.searchClasses(text)}} />
                {/* <View style={styles.searchBar}>
                    <TextInput style={styles.searchInput} placeholder="Enter Search Query" 
                    onChangeText={(text) => {this.setState({search: text}); this.searchClasses(text)}}
                    />
                    <TouchableOpacity style={styles.searchBtn} onPress={() => {this.searchClasses(this.state.search)}}><Text>Search</Text></TouchableOpacity>
                </View> */}

                <FlatList data={this.state.allClasses}
                renderItem={({item}) => (
                    <View style={{borderBottomWidth: 3, marginTop: 20, width: 300, marginLeft: 10}}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginRight: 130, textAlign: 'left' }}>{"Class: " + item.class_name}</Text>
                        <Text style={{color: "#797979", fontSize: 15}}>{"Subject: " + item.class_subject}</Text>
                        <Text style={{color: "#797979", fontSize: 15, marginBottom: -10}}>{"Class(s): " + item.class_standard}</Text>
                        <TouchableOpacity 
                            style={{width:90, marginLeft: 190, bottom: 60, borderRadius: 10, height:50, justifyContent:'center', alignItems:'center', backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8 }}}
                            onPress={() => {this.props.navigation.navigate("ClassDetails", {"details": item})}}
                        >
                            <Text style={{color:'#ffff'}}>View More</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={this.fetchMoreClasses}
                onEndReachedThreshold={0.7}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        flexDirection: 'row',
        height: 40, 
        width: 'auto',
        borderWidth: 0,
        alignItems: 'center', 
        backgroundColor: 'white',
        marginTop: 100
    },
    searchInput: {
        borderWidth: 2,
        height: 50,
        width: 300,
        marginLeft: 0,
        paddingLeft: 10,
        borderRadius: 5 
    },
    searchBtn: {
        borderWidth: 1, 
        height: 50,
        width: 100,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'white',
        right: 100,
        marginTop: 110,
        borderRadius: 5
    }
})