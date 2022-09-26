import { View, Text, Modal } from 'react-native'
import React from 'react';
import Input from "./Input";

export default function Modal(props) {
  const {visible, setVisible} = props;
  return (
    <View>
      <Modal visible={visible} onRequestClose={()=> setVisible(false)}>
        <Input />
      </Modal>
    </View>
  );
}