import { View, Text, Button } from 'react-native'

export default function ProdutoDetalheScreen({ route, navigation }) {
  const { nome } = route.params

  return (
    <View>
      <Text>📦 Detalhe do Produto</Text>
      <Text>Nome: {nome}</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}