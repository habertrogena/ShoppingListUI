import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}> hello habert</Text>
      <StatusBar style="auto" />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Text:{
    color:'red',
    fontSize:20,
  },
  
});
