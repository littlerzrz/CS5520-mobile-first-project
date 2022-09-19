import { View, TextInput, Button } from "react-native";
import React, { useState } from "react";

export default function Input({ setText, styles }) {
  const [input, setInput] = useState("");
  const onConfirm = () => {
    setText(input);
    setInput("");
  };
  return (
    <View style={{ display: "flex" }}>
      <TextInput
        style={styles.input}
        onChangeText={setInput}
        value={input}
        placeholder="Type in whatever you want here"
      ></TextInput>
      <Button title="Confirm" onPress={onConfirm} />
    </View>
  );
}
