import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  function mostrarMensagem() {
    setMensagem(`Olá ${nome}`);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: João"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Enviar" onPress={mostrarMensagem} />
      <Text style={styles.resultado}>{mensagem}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 18,
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  resultado: {
    marginTop: 20,
    fontSize: 20,
    color: 'green',
  },
});