import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import authCheck from '../zustand/store'
import auth from '@react-native-firebase/auth'

const Settings = () => {
 // const userNotAvaible = authCheck((state) => state.userNotAvaible)

const signOut=()=>{
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
}
  return (
    <View>
      <Text>Settings</Text>
      <Button title='Sign Out' onPress={signOut}/>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})