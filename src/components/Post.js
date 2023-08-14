import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Post = (props) => {
  const { backgroundImageUri, profileImageUri, username, followersCount, isFollowing, onFollowPress } = props;

  return (
    <ImageBackground imageStyle={styles.imageStyle} source={{ uri: backgroundImageUri }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <View style = {styles.profileBox}>
            <Image source={{ uri: profileImageUri }} style={styles.profileImage} />
            <View>
              <Text style={styles.username}>{username}</Text>
              <Text style={styles.followers}>{followersCount} Followers</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onFollowPress} style={styles.followButton}>
          <Text style={styles.followButtonText}>{isFollowing ? 'Unfollow' : 'Follow'}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageStyle:{
    borderRadius:15, 
    shadowColor: '#202020',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5
  },
  backgroundImage: {
    width: '100%',
    height: 600, 
    resizeMode: 'cover', 
    marginBottom: 40,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'top',
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color:"white"
  },
  followers: {
    fontSize: 12,
    color: 'white',
  },
  followButton: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    height:30
  },
  followButtonText: {
    fontWeight: 'bold',
  },
  profileBox:{
    flexDirection:"row",
  }
});

export default Post;
