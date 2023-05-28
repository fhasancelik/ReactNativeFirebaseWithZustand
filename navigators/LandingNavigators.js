import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from '../screens/SignUp'
import SignIn from '../screens/SignIn'
const LandingNavigators = () => {
    const Stack =createNativeStackNavigator()
        return (
          <Stack.Navigator>
             <Stack.Screen name='SignUp' component={SignUp} />
             <Stack.Screen name='SignIn' component={SignIn}/>
          
           
           </Stack.Navigator>
            )
      
      
}

export default LandingNavigators

const styles = StyleSheet.create({})