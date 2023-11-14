import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function Saudacao() {
  const [resposta, setResposta] = useState("");
  useEffect(() => {
    const hora = new Date().getUTCHours;
    const resultado =
      hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
    setResposta(resultado);
  }, []);

  return (
    <View>
      <Text>{resposta}</Text>
    </View>
  );
}
