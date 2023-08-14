import React from "react";
import { SafeAreaView,Text,View,StyleSheet,ScrollView } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { users } from "../dummyData/Users";
import Post from "../components/Post"

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.HomeView} >

      <View style = {styles.profileView} >
        <Text>
          XD
        </Text>
      </View>
      <View style = {styles.storyView}>
        
      </View>
      <ScrollView style = {styles.scrollView}>
      {users.map((user, index) => (
          <Post
            key={index}
            backgroundImageUri={user.backgroundImageUri}
            profileImageUri={user.imageUri}
            username={user.username}
            followersCount={user.followersCount}
            isFollowing={user.isFollowing}
            onFollowPress={() => {
              // Define the logic for the follow button press if needed
            }}
          />
        ))}
      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  HomeView:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"black"
  },
  profileView:{
    marginTop:"10%",
    height:"7%",
    width:"100%",
    justifyContent:"center",
    padding:10,
    borderColor:"red",
    borderWidth:5
  },
  storyView:{
    height:"13%",
    width:"100%",    
    padding:10,
    flexDirection:"row",
    borderColor:"red",
    borderWidth:5,
  },
  scrollView:{
    flex:1,
    width:"100%",
    borderWidth:4,
    borderColor:"red",
    paddingHorizontal:20
  }
})

export default HomeScreen;