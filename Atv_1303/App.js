import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('');

  function mostrarMensagem() {
    setMensagem("Dados enviados com sucesso!");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Meu Aplicativo</Text>
      <Text style={styles.texto}>Nome: Midiel</Text>
      <Text style={styles.texto}>Idade: 22 anos</Text>
      <Button title="Enviar" onPress={mostrarMensagem} />
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  texto: {
    fontSize: 18,
    marginBottom: 10,
  },

  mensagem: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
});