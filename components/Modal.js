import { View, Modal, StyleSheet } from "react-native";
import React from 'react';
import Input from "./Input";

export default function MyModal({ visible, setVisible, setText, styles }) {
  return (
    <View>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View style={styles.container}>
          <View style={style}>

            <Input setText={setText} styles={styles} setVisible={setVisible} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
});