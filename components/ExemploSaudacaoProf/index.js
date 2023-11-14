import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";

export default function Scroll() {
  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.scroll}>
        <Text style={styles.container}>Exemplo-1</Text>
        <Text style={styles.container}>ScrollView</Text>
        <Text style={styles.container}>Exemplo-2</Text>
        <Text style={styles.container}>ScrollView</Text>
        <Text style={styles.container}>Exemplo-3</Text>
        <Text style={styles.container}>ScrollView</Text>
      </ScrollView>
      <Text>Exemplo</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "green",
    fontSize: 28,
    padding: 20,
  },
  scroll: {
    backgroundColor: "gray",
    height: 110,
  },
});
