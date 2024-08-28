import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Gatito from './componentes/Gatito';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloText}>otra galeria de gatitos</Text>
      <ScrollView>
      <Gatito
        nombre= 'Gatito bonito'
        imagen= {require('./imagenes/gato1.png')}
      ></Gatito>
      <Gatito
      nombre= 'otro gato'
      imagen= {require('./imagenes/gato2.png')}
      ></Gatito>
      <Gatito
      nombre= 'gato 3'
      imagen= {require('./imagenes/gato3.png')}>
      </Gatito>
      <Gatito
      nombre= 'otro gato'
      imagen= {require('./imagenes/gato4.png')}></Gatito>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText:{
    fontSize:25,
    fontWeight:'bold'
  }
});
