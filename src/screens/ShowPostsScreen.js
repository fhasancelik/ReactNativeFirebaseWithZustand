import { Button, StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useEffect,useState } from 'react'
import PostCard from '../components/PostCard'
import database from '@react-native-firebase/database';
import {authUser} from '../zustand/store';

const ShowPostsScreen = () => {
    const userInfo = authUser(state => state.user);



const [posts,setPosts]=useState([])


   const listenToPostList = () => {
    const databaseRef = database().ref(`posts/${userInfo.uid}`);
    databaseRef.on('value', (snapshot) => {
      const postList = [];
      snapshot.forEach((childSnapshot) => {
        const post = childSnapshot.val();
      // console.log(childSnapshot)
        postList.push(post);
      });
     // console.log('Post list updated:', postList);
     setPosts(postList)
    });
  };

//listenToPostList()


//console.log(posts)

useEffect(()=>{
    listenToPostList()
},[])
  return (
    <View>


<FlatList
        data={posts}
        ListEmptyComponent={<Text>boş</Text>}
        renderItem={({item}) => {

return(
    <PostCard idpost={item.postid} image={item.img} title={item.title} content={item.content}/>
)

        }}
        keyExtractor={(item,id) => id}
      />

    </View>
  )
}

export default ShowPostsScreen

const styles = StyleSheet.create({})