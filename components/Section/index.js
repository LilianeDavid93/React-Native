import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";

const DATA = [
  {
    title: "Frutas",
    data: ["Maçã", "Banana", "Cereja"],
  },
  {
    title: "Legumes",
    data: ["Cenoura", "Vagem", "Beterraba"],
  },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text>{item}</Text>
  </View>
);

const renderSectionHeader = ({ section: { title } }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionHeaderText}>{title}</Text>
  </View>
);

export default function Section() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    backgroundColor: "#f5f5f5",
    padding: 8,
  },

  sectionHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
