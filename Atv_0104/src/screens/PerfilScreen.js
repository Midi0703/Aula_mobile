import { View, Text, Button } from 'react-native'

export default function PerfilScreen({ navigation }) {
  return (
    <View>
      <Text>👤 Tela Perfil</Text>
      <Text>Nome: Midiel</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}
