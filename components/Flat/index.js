import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

export default function Flat() {
  const alunos = [
    { matricula: "001", nome: "Alice" },
    { matricula: "002", nome: "Bernardo" },
    { matricula: "003", nome: "Camila" },
    { matricula: "004", nome: "Daniel" },
    { matricula: "005", nome: "Elena" },
    { matricula: "006", nome: "Felipe" },
    { matricula: "007", nome: "Gabriela" },
    { matricula: "008", nome: "Hugo" },
    { matricula: "009", nome: "Isabela" },
    { matricula: "010", nome: "José" },
    { matricula: "011", nome: "Karine" },
    { matricula: "012", nome: "Lucas" },
    { matricula: "013", nome: "Mariana" },
    { matricula: "014", nome: "Nuno" },
    { matricula: "015", nome: "Olívia" },
    { matricula: "016", nome: "Paulo" },
    { matricula: "017", nome: "Quezia" },
    { matricula: "018", nome: "Ricardo" },
    { matricula: "019", nome: "Sofia" },
    { matricula: "020", nome: "Tiago" },
  ];

  const item = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={item}
        data={alunos}
        keyExtractor={(aluno) => aluno.nome}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
