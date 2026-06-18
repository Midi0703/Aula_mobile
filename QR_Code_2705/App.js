import React, { useState } from "react";
import { View, Text, Button, Linking, Alert } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Haptics from "expo-haptics";

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [cor, setCor] = useState("white");
  const [mensagem, setMensagem] = useState("");

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>Permissão para câmera necessária</Text>
        <Button
          title="Permitir"
          onPress={requestPermission}
        />
      </View>
    );
  }

  const executarComando = (data) => {

    // Mudar cor
    if (data.startsWith("COLOR:")) {
      const novaCor = data.replace("COLOR:", "");
      setCor(novaCor);
    }

    // Vibrar
    else if (data === "VIBRAR") {
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      );
    }

    // Abrir site
    else if (data.startsWith("SITE:")) {
      const url = data.replace("SITE:", "");
      Linking.openURL(url);
    }

    // Exibir mensagem
    else if (data.startsWith("MENSAGEM:")) {
      const texto = data.replace("MENSAGEM:", "");
      setMensagem(texto);
    }

    // Ação criativa
    else if (data === "FESTA") {
      setCor("yellow");
      setMensagem("🎉 Parabéns! Você encontrou o QR secreto!");
      Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      );
    }

    else {
      Alert.alert("Comando não reconhecido");
    }
  };

  const handleBarcodeScanned = ({ data }) => {
    setScanned(true);
    executarComando(data);
  };

  return (
    <View style={{ flex: 1, backgroundColor: cor }}>
      <CameraView
        style={{ flex: 1 }}
        barcodeScannerSettings={{
          barcodeTypes: ["qr"],
        }}
        onBarcodeScanned={
          scanned ? undefined : handleBarcodeScanned
        }
      />

      <View
        style={{
          padding: 20,
          backgroundColor: "#fff",
        }}
      >
        <Text>{mensagem}</Text>

        {scanned && (
          <Button
            title="Escanear novamente"
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    </View>
  );
}