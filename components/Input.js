import { View, TextInput, Button, Image } from "react-native";
import React, { useState } from "react";

export default function Input({ setText, styles, setVisible }) {
  const [input, setInput] = useState("");
  const onConfirm = () => {
    setText(input);
    if(input != "") {
      setVisible(false);
      setInput("");
    }
  };
  const onCancel = () =>{
    setVisible(false);
    setInput("");
    setText("");
  }
  return (
    <View style={{alignItems:"center"}}>
      <Image
        style={{ width: 80, height: 80 }}
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
      <View style={{ flexDirection: "row" }}>
        <Button title="Confirm" onPress={onConfirm} />
        <Button title="Cancel" onPress={onCancel} />
      </View>
    </View>
  );
}
