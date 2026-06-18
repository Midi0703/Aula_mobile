import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [mensagem, setMensagem] = useState('');

  function gerarMensagem() {
    if (nome.trim() === '' || idade.trim() === '') {
      setMensagem('Por favor, preencha nome e idade!');
    } else {
      setMensagem(`Olá ${nome}, você tem ${idade} anos!`);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Saudação Personalizada</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />
      <TouchableOpacity style={styles.botao} onPress={gerarMensagem}>
        <Text style={styles.textoBotao}>Exibir Mensagem</Text>
      </TouchableOpacity>
      {mensagem !== '' && (
        <View style={styles.caixaMensagem}>
          <Text style={styles.textoMensagem}>{mensagem}</Text>
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
    paddingHorizontal: 30,
    borderRadius: 12,
    marginBottom: 20,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  caixaMensagem: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#E8EAF6',
  },
  textoMensagem: {
    fontSize: 20,
    color: '#1A237E',
    fontWeight: 'bold',
  },
});