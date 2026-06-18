import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  function somar() {
 
    const soma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(soma);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
      />
      <TouchableOpacity style={styles.botao} onPress={somar}>
        <Text style={styles.textoBotao}>Somar</Text>
      </TouchableOpacity>
      {resultado !== null && (
        <View style={styles.caixaResultado}>
          <Text style={styles.textoResultado}>Resultado: {resultado}</Text>
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
  caixaResultado: {
    marginTop: 20,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#E8EAF6',
  },
  textoResultado: {
    fontSize: 20,
    color: '#1A237E',
    fontWeight: 'bold',
  },
});