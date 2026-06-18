import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Contato({ nome, telefone, idade }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text>Telefone: {telefone}</Text>
      <Text>Idade: {idade}</Text>

      <Button title="Ver contato" onPress={() => alert(nome)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
    borderRadius: 8
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
