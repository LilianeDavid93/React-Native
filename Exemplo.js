import { Text, View, StyleSheet } from "react-native";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 30 }}>HELLO</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderStyle: "solid",
    borderRadius: 30,
    width: 200,
    height: 200,
  },
});
