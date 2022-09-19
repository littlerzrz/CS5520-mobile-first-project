import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";

export default function App() {
  const name = "HEHEHE";
  return (
    <View style={styles.container}>
      <Header appName={name}/>
      <Text>Open up App.js to start working on {name}!</Text>
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
});
