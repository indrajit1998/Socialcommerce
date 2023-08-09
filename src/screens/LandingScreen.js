import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

const images = [
  require('../../assets/placeholderImage1.jpg'),
  require('../../assets/placeholderImage2.jpg'),
  require('../../assets/placeholderImage4.jpg'),
];

const imageTexts = [
  "Join a vibrant community of Fashion lovers, stylists and influencers now!",
  "Discover and explore endless style options and find the perfect pieces to reflect your personality!",
  "Enjoy the experience of shopping from home with out convenient delivery service!",
];

const LandingScreen = ({navigation}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleContinue = (navigation) => {
    if (currentImageIndex == 2) {
      navigation.navigate("Login");
    } else if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images[currentImageIndex]} style={styles.backgroundImage}>
        <View style={styles.topBarView}>
          <View style={[styles.indicator, currentImageIndex === 0 && styles.activeIndicator]} />
          <View style={[styles.indicator, currentImageIndex === 1 && styles.activeIndicator]} />
          <View style={[styles.indicator, currentImageIndex === 2 && styles.activeIndicator]} />
        </View>

        <Text font style={{fontSize:42, marginTop:20, color:"white", alignSelf:"center" }} >
          ASCE
        </Text>

        <View style={styles.viewStyle}>

          <Text style={styles.imageText}>{imageTexts[currentImageIndex]}</Text>

          <TouchableOpacity style={styles.continueButton} onPress={() => handleContinue(navigation)}>
            <Text style={styles.buttonText}>
              {currentImageIndex < images.length - 1 ? "Continue" : "Get Started"}
            </Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  continueButton: {
    width: "80%",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: "15%",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  viewStyle: {
    flex: 11,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageText: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  topBarView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 10,
    marginHorizontal: 10,
  },
  indicator: {
    flex: 1,
    backgroundColor: "black",
    height: 5,
    width: 20,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  activeIndicator: {
    backgroundColor: "white", 
  },
});

export default LandingScreen;
