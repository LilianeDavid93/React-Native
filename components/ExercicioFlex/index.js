import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function Exercicio() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.caixa}>Menu</Text>
        <Text style={styles.caixa}>Voltar</Text>
        <Text style={styles.caixa}>Sair</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "top",
    backgroundColor: "black",
    justifyContent: "space-aroud",
  },
  caixa: {
    marginTop: "25px",
    width: 100,
    height: 100,
    backgroundColor: "grey",
    textAlign: "center",
    alignItems: "center",
  },
});
