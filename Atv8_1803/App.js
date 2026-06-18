import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [pontos, setPontos] = useState(0);

  function adicionar10() {
    setPontos(prev => prev + 10);
  }

  function adicionar50() {
    setPontos(prev => prev + 50);
  }

  function subtrair10() {
    setPontos(prev => prev - 10);
  }

  function zerar() {
    setPontos(0);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Controle de Pontos</Text>
      <Text style={styles.subtitulo}>Pontos atuais:</Text>
      <Text style={styles.valor}>{pontos}</Text>
      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={adicionar10}>
          <Text style={styles.textoBotao}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={adicionar50}>
          <Text style={styles.textoBotao}>+50</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linha}>
        <TouchableOpacity style={styles.botao} onPress={subtrair10}>
          <Text style={styles.textoBotao}>-10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoReset} onPress={zerar}>
          <Text style={styles.textoBotao}>Zerar</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A237E',
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 18,
    color: '#555',
    marginBottom: 4,
  },
  valor: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 24,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#3949AB',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 6,
    minWidth: 120,
    alignItems: 'center',
  },
  botaoReset: {
    backgroundColor: '#E53935',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 6,
    minWidth: 120,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});