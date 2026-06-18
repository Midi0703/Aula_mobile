import React from 'react';
import { View, StyleSheet } from 'react-native';
import Contato from './src/components/Contato';

export default function App() {
  return (
    <View style={styles.container}>
      <Contato nome="João" telefone="99999-1111" idade={25} />
      <Contato nome="Maria" telefone="99999-2222" idade={30} />
      <Contato nome="Pedro" telefone="99999-3333" idade={28} />
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
