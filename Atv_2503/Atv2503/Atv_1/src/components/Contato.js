import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Contato({ nome, telefone, idade, cidade }) {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}>{nome}</Text>
      <Text>Telefone: {telefone}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Cidade: {cidade}</Text>

      <Button title="Ver contato" color="#000" onPress={() => alert(telefone)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#d33a34',
    padding: 15,
    marginTop: 10,
    borderRadius: 8
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
