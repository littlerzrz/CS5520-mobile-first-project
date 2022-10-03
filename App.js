import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Header, Modal, GoalItem } from "./components";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [visible, setVisible] = useState(false);
  const name = "Welcome to my App";

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Header appName={name} />
        <Modal
          addNewGoal={(input) => setGoals([input, ...goals])}
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
        <View style={styles.goals}>
          <Text style={styles.goalTitle}>Your current goals:</Text>
        </View>
        <FlatList
          style={{ marginTop: 10 }}
          renderItem={({ item }) => (
            <GoalItem
              item={item}
              removeGoal={(key) =>
                setGoals(goals.filter((item) => item.key != key))
              }
            />
          )}
          data={goals}
          keyExtractor={(item) => item.key}
        />
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
    height: "100%",
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
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  goals: {
    backgroundColor: "white",
    width: "100%",
    shadowColor: "black",
    shadowRadius: 3,
    shadowOffset: { width: 0.4, height: 7 },
    shadowOpacity: 0.05,
    zIndex: 2000,
    justifyContent: "center",
    borderTopColor: "lightgray",
    borderTopWidth: 0.3,
    height: 80,
  },
  goalTitle: {
    color: "purple",
    fontSize: 30,
    textAlign: "center",
  },
});
