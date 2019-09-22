/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,  
} from 'react-native';

import Escenario from './Escenarios'
import { ScrollView } from 'react-native-gesture-handler';
import Colores from './Colores';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'


 export default class App extends Component{


  render(){
    return(
      
      
      <ScrollView>     
      <View>

         <ImageBackground source={require('../img/fondo_juegos.jpg')} style={{width: null, height: 220}}>
        <View style={styles.conttitle}>
          <Text style={styles.title}>Escenarios</Text>
        </View>
        </ImageBackground>
        
        <Escenario />
      </View>
      </ScrollView> 
      
      
      
    )
  }
}




const styles = StyleSheet.create({

  conttitle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20 
  },
  title:{
    fontSize: 33,
    fontWeight: 'bold',
    color: 'white',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
   
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 20
    
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});





