import { Button, Text, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("Liliane");
  const [idade, setIdade] = useState(25);

  // const trocar = () => {
  //   setNome("Sophia");
  //   setIdade(20);
  // };

  return (
    <View style={{ marginTop: 25 }}>
      <Button
        title="Alterar Nome"
        onPress={() => {
          setNome("Sophia");
          setIdade(10);
        }}
      ></Button>
      <Text>{nome}</Text>
      <Text>{idade}</Text>
    </View>
  );
}
