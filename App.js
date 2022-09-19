import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Header, Input} from "./components";

export default function App() {
  const [text, setText] = useState("");
  const name = "HEHEHE";
  return (
    <View style={styles.container}>
      <Header appName={name} />
      <Input setText={setText} styles={styles}/>
      <Text style={{color:"red", fontSize:30}}> Submitted input: {text} </Text>
      <Text style={{marginTop:10}}>Open up App.js to start working on {name}!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    height: 40,
    margin:4,
    padding:4,
  }
});
