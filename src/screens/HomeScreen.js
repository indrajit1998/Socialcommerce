import React from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView, Image,TouchableOpacity } from "react-native";
import { users } from "../dummyData/Users";
import Post from "../components/Post";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.HomeView}>
      <View style={styles.profileView}>
        <View style={styles.profileBox}>
          <Image style={{borderRadius:20, width:30,height:30,marginRight:10}} source={{uri:users[0].imageUri}} />
          <Text style={{color:"white"}}>{users[0].username}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={{marginRight:20}} onPress={() => console.log("Heart icon pressed")}>
            <Icon name="heart" size={32} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Message icon pressed")}>
            <Icon name="location-arrow" size={32} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storyView}>
          {users.map((user, index) => (
            <View key={index} style={styles.storyItem}>
              <Image source={{ uri: user.imageUri }} style={styles.storyImage} />
              <Text style={styles.username}>{user.username}</Text>
            </View>
          ))}
        </ScrollView>
        {users.map((user, index) => (
          <Post
            key={index}
            backgroundImageUri={user.backgroundImageUri}
            profileImageUri={user.imageUri}
            username={user.username}
            followersCount={user.followersCount}
            isFollowing={user.isFollowing}
            onFollowPress={() => {
              console.log("followed")
            }}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HomeView: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
  profileView: {
    marginTop: "10%",
    height: "7%",
    width: "100%",
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection:"row",
    padding:10
  },
  storyView: {
    height: "20%",
    width: "100%",
    padding: 10,
  },
  storyItem: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  storyImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,  
    borderColor: "grey",
  },
  username: {
    marginTop: 6,
    color: "white",
  },
  scrollView: {
    width: "100%",
  },
  iconContainer:{
    flexDirection:"row",
  },
  profileBox:{
    flexDirection:"row",
    backgroundColor:"#202020",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    height:40,
    padding:10
  }
});

export default HomeScreen;
