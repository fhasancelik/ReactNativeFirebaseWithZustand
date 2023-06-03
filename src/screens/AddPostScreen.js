import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import database from '@react-native-firebase/database';
import {authUser} from '../zustand/store';
import { useNavigation } from '@react-navigation/native';

const AddPostScreen = () => {

const navigation=useNavigation()

const userInfo = authUser(state => state.user);
    const [newpost,setnewpost]=useState({
       postid:"",
title:"",
content:"",
img:""

    })

    const[postIdd,setpostIdd]=useState(userInfo.uid)

//console.log(postIdd)

const onChangeText=(key,value)=>{
setnewpost({...newpost,[key]:value})
}
const savePostToFirebase = (postId) => {
    const databaseRef = database().ref(`posts/${postId}`);
    const newPostRef = databaseRef.push(); 
    const newpostId = newPostRef.key;
    console.log(newpostId)
    
    const post = {
      postid: newpostId,
      title: newpost.title,
      content: newpost.content,
      img: newpost.img
    };
  
    newPostRef.set(post)
      .then(() => {
        console.log('Post saved to Firebase Realtime Database');
        navigation.navigate('ShowPostsScreen');
        setnewpost({
          postid: "",
          title: "",
          content: "",
          img: ""
        });
      })
      .catch((error) => {
        console.error('Error saving post to Firebase Realtime Database:', error);
      });
  };
  
  return (
    <View>
     <TextInput value={newpost.title} onChangeText={(text)=>onChangeText('title',text)}  placeholder='title'/>
     <TextInput value={newpost.content} onChangeText={(text)=>onChangeText('content',text)} placeholder='content'/>
     <TextInput value={newpost.img} onChangeText={(text)=>onChangeText('img',text)} placeholder='img url'/>
     
<Button title='Add Post' onPress={()=>savePostToFirebase(postIdd)}/>
    </View>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({})