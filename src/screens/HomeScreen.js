import React from "react";
import { SafeAreaView,Text,View,StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

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

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  HomeView:{
    flex:1,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  profileView:{
    marginTop:"10%",
    height:"7%",
    justifyContent:"center",
    padding:10,
    borderColor:"red",
    borderWidth:5
  }
})

export default HomeScreen;