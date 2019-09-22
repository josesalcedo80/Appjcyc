/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */



import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import Colores from './Colores';




const escenarios = [

   {
    image: require('../img//escenarios/escenario6.png'),
    title: 'Estadio de fútbol Romelio Martínez',
    link: 'http://barranquilla2018.com/estadio-romelio-martinez/',
   },  
   
   {
    image: require('../img//escenarios/escenario2.png'),
    title: 'Complejo acuático Eduardo Movilla',
    link: 'http://barranquilla2018.com/complejo-acuatico/',
  },
  {
    image: require('../img//escenarios/escenario3.png'),
    title: 'Estadio de Raquetbol',
    link: 'http://barranquilla2018.com/estadio-romelio-martinez/',
  },
  {
    image: require('../img//escenarios/escenario4.png'),
    title: 'Estadio de Atletismo Rafael Cotes',
    link: 'http://barranquilla2018.com/estadio-de-atletismo-rafael-cotes/',
  },
  {
    image: require('../img//escenarios/escenario5.png'),
    title: 'Estadio de Beisbol Edgar Renteria',
    link: 'http://barranquilla2018.com/estadio-de-beisbol-edgar-renteria/',
  },
  
  {
    image: require('../img//escenarios/escenario7.png'),
    title: 'Estadio de raquetas ',
    link: 'http://barranquilla2018.com/parque-distrital-de-raquetas/',
  },
  {
    image: require('../img//escenarios/escenario8.png'),
    title: 'Estadio Metropolitano Roberto Meléndez',
    link: 'http://barranquilla2018.com/estadio-metropolitano-roberto-melendez/',
  },
  {
    image: require('../img/escenarios/escenario1.png'),
    title: 'Club de caza y tiro',
    link: 'http://barranquilla2018.com/escenarios/',
  },
  {
    image: require('../img//escenarios/escenario9.png'),
    title: 'Estadio moderno Julio Torres.',
    link: 'http://barranquilla2018.com/estadio-moderno-julio-torres/',  
  },
  {
    image: require('../img//escenarios/escenario10.png'),
    title: 'Pista de BMX Daniel Barragán', 
    link: 'http://barranquilla2018.com/pista-de-bmx-daniel-barragan/', 
  },
  {
    image: require('../img//escenarios/escenario11.png'),
    title: 'Palacio de Combates Sugar' ,
    link: 'http://barranquilla2018.com/coliseo-sugar-baby-rojas/',
  },
  {
    image: require('../img//escenarios/escenario12.png'),
    title: 'Patinódromo Alex Cuajavante',
    link: 'http://barranquilla2018.com/patinodromo-alex-cujavante/',  
  },
  {
    image: require('../img//escenarios/escenario13.png'),
    title: 'Estadio de softball',
    link: 'http://barranquilla2018.com/estadio-pequenas-ligas/',
  },
 
  
 
];


export default class Escenario extends Component{
  
  render(){
    return(

    <ScrollView style={styles.container}>
    {escenarios.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => openURLInBrowser(item.link)}
            style={styles.linkContainer}>
            <Text style={[styles.title]}>{item.title}</Text>
            <Image source={item.image} style={styles.image}></Image>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </ScrollView>
      
    )
  }
}





const styles = StyleSheet.create({

  image:{
    width: 340,
    height: 180,
  },

  container: {
    marginTop: 32,
    paddingHorizontal: 24,
    
  },
  linkContainer: {
    flex: 1,  
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  title: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colores.primary
    
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colores.dark,
    
  },
  separator: {
    backgroundColor: Colores.light,
    height: 1,
  },
  
});




