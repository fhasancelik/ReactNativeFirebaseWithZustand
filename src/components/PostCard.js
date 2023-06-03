import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';
import {authUser} from '../zustand/store';

const PostCard = ({title,content,image,idpost}) => {
  //console.log(idpost)

const uppost={
  title:"up",
  content:"date",
  img:"data:image/jpeg;base64,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",
  postid:idpost
}

  const userInfo = authUser(state => state.user);
  const deletePostFromFirebase = (postId) => {
    const databaseRef = database().ref(`posts/${userInfo.uid}/${postId}`);
    databaseRef.remove()
      .then(() => {
        console.log('Post deleted from Firebase Realtime Database');
      })
      .catch((error) => {
        console.error('Error deleting post from Firebase Realtime Database:', error);
      });
  };



  const updatePostInFirebase = (postId, updatedPost) => {
    const databaseRef = database().ref(`posts/${userInfo.uid}/${postId}`);
  
    databaseRef.set(updatedPost)
      .then(() => {
        console.log('Post updated in Firebase Realtime Database');
      })
      .catch((error) => {
        console.error('Error updating post in Firebase Realtime Database:', error);
      });
  };


  return (
    <View style={{flexDirection:'row'}}>
      <View>
        <Image
        style={{width:100,height:100}}
          source={{
            uri:  image         }}
        />
      </View>

      <View>
      
        <Text>{title}</Text>
        <Text>{content}</Text>
      </View>

      <View>
<Button title='delete' onPress={()=>deletePostFromFirebase(idpost)}/>
<Button title='update' onPress={()=>updatePostInFirebase(idpost,uppost)}/>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({});
