import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import {Header, Modal} from "./components";

export default function App() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const name = "HEHEHE";
  return (
    <View style={styles.container}>
      <Header appName={name} />
      <Modal
        setText={setText}
        styles={styles}
        visible={visible}
        setVisible={setVisible}
      />
      <Button title="Tap to add a new goal" onPress={() => setVisible(true)}></Button>
      {/* <Input setText={setText} styles={styles}/> */}
      <Text style={{ color: "green", fontSize: 30 }}>
        Your current goal: {text}
      </Text>
      <Text style={{ marginTop: 10 }}>
        Open up App.js to start working on {name}!
      </Text>
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
