import { View, Text, Button } from 'react-native'

export default function ProdutosScreen({ navigation }) {
  return (
    <View>
      <Text>🛒 Tela Produtos</Text>

      <Button
        title="Produto 1"
        onPress={() =>
          navigation.navigate('ProdutoDetalhe', {
            nome: 'Cano 3/4'
          })
        }
      />

      <Button
        title="Produto 2"
        onPress={() =>
          navigation.navigate('ProdutoDetalhe', {
            nome: 'Cano 1/2'
          })
        }
      />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}