import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";

import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);
  const [loading, setLoading] = useState(false);

  async function buscarCEP() {
    try {
      setLoading(true);
      setEndereco(null);
      setLocalizacao(null);

      const cepLimpo = cep.replace(/\D/g, "");

      if (cepLimpo.length !== 8) {
        Alert.alert("Erro", "Digite um CEP válido com 8 dígitos.");
        return;
      }

      const respostaCEP = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      const textoCEP = await respostaCEP.text();
      const dadosCEP = JSON.parse(textoCEP);

      if (dadosCEP.erro) {
        Alert.alert("Erro", "CEP não encontrado.");
        return;
      }

      setEndereco(dadosCEP);

      const enderecoBusca = `${dadosCEP.localidade}, ${dadosCEP.uf}, Brasil`;

      const respostaGeo = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
          enderecoBusca
        )}&format=json&limit=1`,
        {
          headers: {
            "User-Agent": "expo-cep-app",
          },
        }
      );

      const textoGeo = await respostaGeo.text();
      const dadosGeo = JSON.parse(textoGeo);

      if (!dadosGeo || dadosGeo.length === 0) {
        console.log("Nominatim falhou, usando fallback");

        setLocalizacao({
          latitude: -21.9345,
          longitude: -50.5136, // Tupã-SP
        });

        return;
      }

      const latitude = parseFloat(dadosGeo[0].lat);
      const longitude = parseFloat(dadosGeo[0].lon);

      setLocalizacao({ latitude, longitude });
    } catch (error) {
      console.log("ERRO:", error);
      Alert.alert("Erro", "Falha ao consultar serviços.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Localizador por CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />

      <TouchableOpacity style={styles.botao} onPress={buscarCEP}>
        <Text style={styles.textoBotao}>BUSCAR</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#007AFF" />}

      {localizacao && (
        <MapView
          style={styles.mapa}
          initialRegion={{
            latitude: localizacao.latitude,
            longitude: localizacao.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={localizacao} />
        </MapView>
      )}

      {endereco && (
        <View style={styles.info}>
          <Text style={styles.subtitulo}>Endereço Encontrado</Text>

          <Text>Rua: {endereco.logradouro || "N/A"}</Text>
          <Text>Bairro: {endereco.bairro || "N/A"}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
          <Text>CEP: {endereco.cep}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  mapa: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  info: {
    backgroundColor: "#f4f4f4",
    padding: 15,
    borderRadius: 8,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});