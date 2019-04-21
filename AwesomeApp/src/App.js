import React, { Component } from "react";
import { View } from "react-native";
// import the firebase third party lib
import firebase from "firebase";
// Custom Components to be used in the app
import { Header } from "./components/common";
// Import our LoginForm component to be displayed on the screen
import LoginForm from "./components/LoginForm";

class App extends Component {
// Life cycle method to init the firebase
componentWillMount() {
firebase.initializeApp({
    apiKey: "AIzaSyC-PALiEaRGj0FRXauGkLF1JczwFHmjFuA",
    authDomain: "myfirstproject-25b4d.firebaseapp.com",
    databaseURL: "https://myfirstproject-25b4d.firebaseio.com",
    projectId: "myfirstproject-25b4d",
    storageBucket: "myfirstproject-25b4d.appspot.com",
    messagingSenderId: "559055004056"
});
}
render() {
return (
<View>
<Header headerText="Authentication" />
<LoginForm />
</View>
);
}
}

export default App;