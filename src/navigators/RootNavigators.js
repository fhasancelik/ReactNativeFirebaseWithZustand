import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LandingNavigators from './LandingNavigators'
import BottomNavigators from './BottomNavigators'
import {authCheck} from '../zustand/store'
import auth from '@react-native-firebase/auth'
import { authUser } from '../zustand/store'

const RootNavigators = () => {


const Root =createNativeStackNavigator()


const userAvaible = authCheck((state) => state.auth)
const userYesAvaible = authCheck((state) => state.userAvaible)
const userNotAvaible = authCheck((state) => state.userNotAvaible)
const setuserInfo=authUser((state)=>state.userInfo)



  // Handle user state changes
  function onAuthStateChanged(user) {
    if(user){
      setuserInfo(user)
      userYesAvaible()
    }else{
      userNotAvaible()
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);



return(
<Root.Navigator>
{

userAvaible==false?(
  <Root.Screen options={{headerShown:false}} name='Landing' component={LandingNavigators}/>

):(
  <Root.Screen options={{headerShown:false}} name='Home' component={BottomNavigators} />


)

}


</Root.Navigator>
)



}
export default RootNavigators

const styles = StyleSheet.create({})