import { View, TextInput, Button, Image } from "react-native";
import React, { useState } from "react";

export default function Input({ addNewGoal, styles, setVisible }) {
  const [input, setInput] = useState("");
  const onConfirm = () => {
    addNewGoal({ text: input, key: Math.random() });
    if (input != "") {
      setVisible(false);
      setInput("");
    }
  };
  const onCancel = () => {
    setVisible(false);
    setInput("");
    addNewGoal("");
  };
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{ width: 80, height: 80, margin: 10 }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3233/3233474.png",
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="Type in your goal here"
      ></TextInput>
      <View style={{ flexDirection: "row-reverse" }}>
        <View style={{ width: "30%", margin: 5 }}>
          <Button
            disabled={input == ""}
            color={"#f194ff"}
            title="Confirm"
            onPress={onConfirm}
          />
        </View>
        <View style={{ width: "30%", margin: 5 }}>
          <Button color={"#f194ff"} title="Cancel" onPress={onCancel} />
        </View>
      </View>
    </View>
  );
}
