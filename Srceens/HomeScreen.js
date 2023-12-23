import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import config from '../config/config'

import Categories from './Categories'

class Home  extends Component {

  componentDidMount(){
    console.log(config.API_KEY)
  }
render(){
  return (
    <View>
      <Categories />
      <Text>Home</Text>
    </View>
  );
}

}