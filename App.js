import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';


const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  return (
    <View style={styles.container}>
      
      <ImageBackground source={require('./assets/b.png')} style={styles.image}>
      <Text style={styles.text}>B for Banana.</Text>
    </ImageBackground>
      {/* <Text>yyy up App.js to start working on your app!</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 300,
    top: 100,
    
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center"
  }
});
