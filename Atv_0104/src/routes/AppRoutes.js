import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import SobreScreen from '../screens/SobreScreen'
import ContatoScreen from '../screens/ContatoScreen'
import PerfilScreen from '../screens/PerfilScreen'
import ProdutoScreen from '../screens/ProdutoScreen'
import ProdutoDetalheScreen from '../screens/ProdutoDetalheScreen'

const Stack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Sobre" component={SobreScreen} />
      <Stack.Screen name="Contato" component={ContatoScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Produto" component={ProdutoScreen} />
      <Stack.Screen name="ProdutoDetalhe" component={ProdutoDetalheScreen} />
    </Stack.Navigator>
  )
}
