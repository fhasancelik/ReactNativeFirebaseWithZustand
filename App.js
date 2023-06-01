import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigators from './src/navigators/RootNavigators'


const App = () => {
  return (
 <SafeAreaView style={{flex:1}}>
   <NavigationContainer>
  <RootNavigators/>
  </NavigationContainer>
 </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})