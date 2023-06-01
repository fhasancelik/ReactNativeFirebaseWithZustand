import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import {authUser} from '../zustand/store';

const Profile = () => {
    const userInfo = authUser(state => state.user);
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          marginTop: 10,
        }}>
        <Image
          source={{uri: userInfo.photoURL}}
          style={{width: 200, height: 200, borderRadius: 100}}
        />
        <Text>{userInfo.displayName}</Text>
      </View>

    </View>
  );
}

export default Profile

const styles = StyleSheet.create({})