import { View, Modal, StyleSheet } from "react-native";
import React from "react";
import Input from "./Input";

export default function MyModal({ visible, setVisible, setText, styles }) {
  return (
    <View>
      <Modal visible={visible} onRequestClose={() => setVisible(false)}>
        <View
          style={{ alignContent: "center", justifyContent: "center", flex: 1 }}
        >
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
  backgroundColor: "#f2eee6",
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
