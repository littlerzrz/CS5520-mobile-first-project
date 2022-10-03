import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { Header, Modal } from "./components";

export default function App() {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const name = "Welcome to my App";
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Header appName={name} />
        <Modal
          setText={setText}
          styles={styles}
          visible={visible}
          setVisible={setVisible}
        />
        <Button
          title="Tap to add a new goal"
          onPress={() => setVisible(true)}
        ></Button>
      </View>
      <View style={styles.bottom}>
        <View
          style={{ backgroundColor: "#80d3e2", borderRadius: 5}}
        >
          <Text
            style={{
              color: "green",
              fontSize: 30,
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Your current goal: {"\n"}
            {text}
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    height:'100%'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 5,
    height: 40,
    margin: 12,
    padding: 4,
    color: "purple",
    width: 200,
  },
  bottom: {
    flex: 4,
    backgroundColor: "#ddefef",
    width:'100%'
  },
});
