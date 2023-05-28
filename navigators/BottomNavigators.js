import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/Profile'
import Settings from '../screens/Settings'

const BottomNavigators = () => {
    const Bottom=createBottomTabNavigator()
  return (
   <Bottom.Navigator>
    <Bottom.Screen name='Profile' component={Profile}/>
    <Bottom.Screen name='Settings' component={Settings}/>
   </Bottom.Navigator>
  )
}

export default BottomNavigators

const styles = StyleSheet.create({})