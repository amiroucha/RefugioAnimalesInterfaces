import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    Poppins: require('../src/fonts/Poppins-Regular.ttf'),
    WendyOne: require('../src/fonts/WendyOne-Regular.ttf'),
  });
/*

TENGO QUE PONER INDEX EN CADA PARTE O ALFO ASI, VA PASANDO DE INDEX A INDEX , DESDE EL QUE ESTA MAS CERCA DE LA RAIZ AL MAS LEJANO

*/
}