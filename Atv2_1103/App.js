import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function App() {

  function clicarBotao() {
    alert("Botão clicado!");
  }

  return (
    <View style={styles.container}>

      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.imagem}
      />
      <Text style={styles.nome}>Midiel</Text>
      <Text style={styles.descricao}>
        Desenvolvedor iniciante aprendendo React Native.
      </Text>
      <Button title="Seguir" onPress={clicarBotao} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  imagem: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },

  nome: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});