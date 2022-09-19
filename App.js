import { StyleSheet, Text, View } from 'react-native';

import  Header  from './components/header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      <Header title= 'Adivina el numero'></Header>
    </View>
  );
}

