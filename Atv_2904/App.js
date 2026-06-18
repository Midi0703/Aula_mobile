import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);

  async function buscarCep() {
    if (cep.length < 8) {
      alert("Digite um CEP válido");
      return;
    }

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if(dados.erro){
      alert("CEP não encontrado");
      setEndereco(null);
      setCep("");
      return;
    }

    setEndereco(dados);
    setCep("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscar CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />

      <Button title="Buscar" onPress={buscarCep} />

      {endereco && (
        <View style={styles.resultado}>
          <Text>Rua: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
          <Text>DDD: {endereco.ddd}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  titulo: { fontSize: 22, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 },
  resultado: { marginTop: 20 }
});
