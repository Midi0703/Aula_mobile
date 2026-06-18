import React from 'react';
import { View, StyleSheet } from 'react-native';
import Contato from './src/components/Contato';

export default function App() {
  return (
    <View style={styles.container}>
      <Contato nome="João" telefone="99999-1111" idade={25} cidade="Tupã" />
      <Contato nome="Maria" telefone="99999-2222" idade={30} cidade="Tupã"/>
      <Contato nome="Pedro" telefone="99999-3333" idade={28} cidade="Tupã"/>
      <Contato nome="Brayan" telefone="99999-4444" idade={22} cidade="Tupã"/>
      <Contato nome="Gabriel" telefone="99999-5555" idade={23} cidade="Luiziânia"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  }
});
