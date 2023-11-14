import { View, FlatList, StyleSheet, Text } from "react-native";
import React, { useState } from "react";

export default function List() {
  const [feed, setFeed] = useState([
    { id: 1, nome: "João", idade: 25, email: "joao@email.com" },
    { id: 2, nome: "Maria", idade: 30, email: "maria@email.com" },
    { id: 3, nome: "Carlos", idade: 22, email: "carlos@email.com" },
    { id: 4, nome: "Ana", idade: 28, email: "ana@email.com" },
    { id: 5, nome: "Pedro", idade: 35, email: "pedro@email.com" },
    { id: 6, nome: "Laura", idade: 27, email: "laura@email.com" },
    { id: 7, nome: "Gabriel", idade: 24, email: "gabriel@email.com" },
    { id: 8, nome: "Julia", idade: 31, email: "julia@email.com" },
    { id: 9, nome: "Lucas", idade: 29, email: "lucas@email.com" },
    { id: 10, nome: "Isabela", idade: 26, email: "isabela@email.com" },
  ]);
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Pessoa data={item} />}
      ></FlatList>
    </View>
  );
}
function Pessoa(props) {
  return (
    <View style={styles.pessoa}>
      <Text style={styles.texto}>{props.data.nome}</Text>
      <Text style={styles.texto}>{props.data.idade}</Text>
      <Text style={styles.texto}>{props.data.email}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pessoa: {
    backgroundColor: "grey",
    height: 200,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "#fff",
  },
});
