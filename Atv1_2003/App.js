import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [inputTexto, setInputTexto] = useState('');
  const [textoExibido, setTextoExibido] = useState('');

  function mostrarTexto() {
    setTextoExibido(inputTexto);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Mostrar Texto</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={inputTexto}
        onChangeText={setInputTexto}
      />
      <TouchableOpacity style={styles.botao} onPress={mostrarTexto}>
        <Text style={styles.textoBotao}>Exibir</Text>
      </TouchableOpacity>
      {textoExibido !== '' && (
        <View style={styles.caixaTexto}>
          <Text style={styles.textoExibido}>{textoExibido}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A237E',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#1A237E',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#FFF',
  },
  botao: {
    backgroundColor: '#3949AB',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  caixaTexto: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#E8EAF6',
  },
  textoExibido: {
    fontSize: 20,
    color: '#1A237E',
    fontWeight: 'bold',
  },
});