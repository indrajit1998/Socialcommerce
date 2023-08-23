import React, { useState,useEffect,useRef } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'; // Import from react-native-animatable

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

const LandingScreen = ({ navigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const backgroundImageRef = useRef(null);

  const handleContinue = () => {
    if (currentImageIndex === images.length - 1) {
      setExitAnimation(true);
      setTimeout(() => {
        navigation.navigate("Login");
      }, 500);
    } else {
      setExitAnimation(true);
      setTimeout(() => {
        setCurrentImageIndex(currentImageIndex + 1);
        backgroundImageRef.current.fadeIn(500);
        setExitAnimation(false);
      }, 500);
    }
  };

  useEffect(() => {
    // Reset exit animation state when the component mounts
    return () => {
      setExitAnimation(false);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation={exitAnimation ? "fadeOut" : "fadeIn"} // Apply fade out when exitAnimation is true
        duration={300}
        ref={backgroundImageRef}
        style={styles.backgroundImageContainer}
      >
        <ImageBackground
          source={images[currentImageIndex]}
          style={styles.backgroundImage}
        >
          <View style={styles.topBarView}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentImageIndex === index && styles.activeIndicator
                ]}
              />
            ))}
          </View>

          <Text font style={{ fontSize: 42, marginTop: 20, color: "white", alignSelf: "center" }}>
            ASCE
          </Text>

          <View style={styles.viewStyle}>
            <Text style={styles.imageText}>{imageTexts[currentImageIndex]}</Text>
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
              <Text style={styles.buttonText}>
                {currentImageIndex < images.length - 1 ? "Continue" : "Get Started"}
              </Text>
            </TouchableOpacity>
          </View>
          </ImageBackground>
      </Animatable.View>
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
  backgroundImageContainer: {
    flex: 1,
  },
});

export default LandingScreen;
