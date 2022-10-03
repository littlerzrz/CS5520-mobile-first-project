import { View, Text } from "react-native";
import React from "react";

export default function Header({ appName }) {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          marginBottom: 10,
          color: "purple",
        }}
      >
        {appName}
      </Text>
    </View>
  );
}
