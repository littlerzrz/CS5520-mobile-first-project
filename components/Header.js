import { View, Text } from "react-native";
import React from "react";

export default function Header({ appName }) {
  return (
    <View>
      <Text style={{ fontWeight: "bold", fontSize: 40, marginBottom: 40 }}>
        {appName}
      </Text>
    </View>
  );
}
