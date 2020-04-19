import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert  } from 'react-native';


const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>

        <ImageBackground source={require('./assets/d.png')} style={styles.image}>
          <Text style={styles.text}>B for Banana.</Text>


        </ImageBackground>
        {/* <Text>yyy up App.js to start working on your app!</Text> */}



      </View>
      <View style={{ flex: 1, flexDirection: 'row', top: 300, justifyContent:"center" }}>
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', height: 100 }}>
        <Button 
          title="Previous"
          color="powderblue" 
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        </View>

        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
        <Button 
          title="Home"
          color="powderblue" 

          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        </View>


        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
        <Button 
          title="Next"
          color="steelblue" 

          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  button: {
    width: 100
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 400,
    top: 100,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    top: 300,
  }
});
