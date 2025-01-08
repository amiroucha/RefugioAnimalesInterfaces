import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Styles } from './src/theme/Styles';

export default function App() {
  return (
    <View style={Styles.contenedor}>
      <Text style={Styles.tituloLogin}>Bienvenido a</Text>
      <Text style={Styles.PetConnect}>PetConnect</Text>
      
      <StatusBar style="auto"/>
    </View>
  );
}
