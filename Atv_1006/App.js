import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [latitude, setLatitude] = useState('-21.9347');
  const [longitude, setLongitude] = useState('-50.5138');

  const [localizacao, setLocalizacao] = useState({
    latitude: -21.9347,
    longitude: -50.5138,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const buscarLocal = () => {
    setLocalizacao({
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
  };

  const voltarTupa = () => {
    setLatitude('-21.9347');
    setLongitude('-50.5138');

    setLocalizacao({
      latitude: -21.9347,
      longitude: -50.5138,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Latitude"
        keyboardType="numeric"
        value={latitude}
        onChangeText={setLatitude}
      />

      <TextInput
        style={styles.input}
        placeholder="Longitude"
        keyboardType="numeric"
        value={longitude}
        onChangeText={setLongitude}
      />

      <Button title="Localizar" onPress={buscarLocal} />

      <View style={{ marginTop: 10 }}>
        <Button title="Voltar para Tupã" onPress={voltarTupa} />
      </View>

      <MapView
        style={styles.mapa}
        region={localizacao}
      >
        <Marker
          coordinate={{
            latitude: localizacao.latitude,
            longitude: localizacao.longitude,
          }}
          title="Localização"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },

  mapa: {
    flex: 1,
    marginTop: 10,
  },
});