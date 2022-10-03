import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function GoalItem({ item, removeGoal }) {
  return (
    <View style={styles.container}>
      <Text style={styles.goal}>{item.text}</Text>
      <Button color="black" title="X" onPress={() => removeGoal(item.key)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 70,
    width: 250,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "pink",
    marginVertical: 8,
    justifyContent:'space-around',
    paddingLeft:20,
    paddingRight:20
  },

  goal: {
    flex: 1,
    color: "black",
    textAlign: "center",
    fontSize: 50,
  },
});
