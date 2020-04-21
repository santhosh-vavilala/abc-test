import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, Alert } from 'react-native';
import * as a from './assets/a.png'



const image = { uri: "https://reactjs.org/logo-og.png" };

export default class App extends Component{  

  constructor(){
 
    super();
 
    this.state={
 
      currentIndex : 0,
      images: [
        {
          id: 0,
          path: require('./assets/a.png'),
          text: 'A for Apple'
        },
        {
          id: 1,
          path: require('./assets/b2.png'),
          text: 'B for Banana'
        },
        {
          id: 2,
          path: require('./assets/c1.png'),
          text: 'C for Cat'
        },
        {
          id: 0,
          path: require('./assets/d3.png'),
          text: 'D for Dog'
        },
        {
          id: 0,
          path: require('./assets/e1.png'),
          text: 'E for Elephant'
        },
        {
          id: 0,
          path: require('./assets/f6.png'), 
          text: 'F for Fish'
        },
        {
          id: 0,
          path: require('./assets/g.png'), 
          text: 'G for Grapes'
        },
        {
          id: 0,
          path: require('./assets/h1.png'), 
          text: 'H for Horse'
        },
        {
          id: 0,
          path: require('./assets/i.png'), 
          text: 'I for Icecream'
        },
        {
          id: 0,
          path: require('./assets/j1.png'), 
          text: 'J for Jug'
        },
        {
          id: 0,
          path: require('./assets/k1.png'), 
          text: 'K for Kite'
        },
        {
          id: 0,
          path: require('./assets/l1.png'), 
          text: 'L for Lion'
        },
        {
          id: 0,
          path: require('./assets/m1.png'), 
          text: 'M for Monkey'
        },
        {
          id: 0,
          path: require('./assets/n1.png'), 
          text: 'N for Nest'
        },
        {
          id: 0,
          path: require('./assets/o.jpg'),
          text: 'O for Orange'
        },
        {
          id: 0,
          path: require('./assets/p2.png'), 
          text: 'P for Parrot'
        },
        {
          id: 0,
          path: require('./assets/q2.png'), 
          text: 'Q for Queen'
        },
        {
          id: 0,
          path: require('./assets/r1.png'), 
          text: 'R for Rabbit'
        },
        {
          id: 0,
          path: require('./assets/s1.png'), 
          text: 'S for Sun'
        },
        {
          id: 0,
          path: require('./assets/t1.png'), 
          text: 'T for Tree'
        },
        {
          id: 0,
          path: require('./assets/u1.png'), 
          text: 'U for Umbrella'
        },
        {
          id: 0,
          path: require('./assets/v2.png'), 
          text: 'V for Voilin'
        },
        {
          id: 0,
          path: require('./assets/w4.png'), 
          text: 'W for Watch'
        }, 
        {
          id: 0,
          path: require('./assets/x3.png'), 
          text: 'X for X-mas tree'
        },
        {
          id: 0,
          path: require('./assets/y2.png'), 
          text: 'Y for Yatch'
        },
        {
          id: 0,
          path: require('./assets/z2.png'), 
          text: 'Z for Zebra'
        },

        
      ]
 
    }
 
  }
  handleNext=()=>{
 
    this.setState({
 
      currentIndex : (this.state.currentIndex < this.state.images.length - 1) ?  this.state.currentIndex + 1 : 0
 
    })
  }

  handlePrev=()=>{
 
    this.setState({
 
      currentIndex : (this.state.currentIndex >= 1) ?  this.state.currentIndex - 1 : 0
 
    })
  }

  handleHome=()=>{
 
    this.setState({
 
      currentIndex :  0
 
    })
  }
 
  render() {
 

    return (
      <View style={styles.container}> 
        <View style={styles.container}>
  
          <ImageBackground source={this.state.images[this.state.currentIndex].path} style={styles.image}>
            <Text style={styles.text}>{this.state.images[this.state.currentIndex].text}</Text>
  
  
          </ImageBackground>
          {/* <Text>yyy up App.js to start working on your app!</Text> */}
  
  
  
        </View>
        <View style={{ flex: 1, flexDirection: 'row', top: 300, justifyContent: "center" }}>
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', height: 100 }}>
            <Button
              title="Previous"
              color="powderblue"
              onPress={this.handlePrev}
            />
          </View> 
  
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
            <Button
              title="Home"
              color="skyblue"
  
              onPress={this.handleHome}
            />
          </View>
  
  
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
            <Button
              title="Next"
              color="steelblue"
              onPress={this.handleNext}
            />
          </View>
  
        </View>
      </View>
    );
  }
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
