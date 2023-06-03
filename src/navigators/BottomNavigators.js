import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

import AddPostScreen from '../screens/AddPostScreen';
import ShowPostsScreen from '../screens/ShowPostsScreen';

const BottomNavigators = () => {
  const Bottom = createBottomTabNavigator();

  
  return (
    <Bottom.Navigator>
            <Bottom.Screen name="ShowPostsScreen" component={ShowPostsScreen} />
      <Bottom.Screen name="AddPost" component={AddPostScreen} />
      <Bottom.Screen name="Profile" component={Profile} />
      <Bottom.Screen name="Settings" component={Settings} />
    </Bottom.Navigator>
  );
};

export default BottomNavigators;

const styles = StyleSheet.create({});
