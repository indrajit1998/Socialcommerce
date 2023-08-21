import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from "react-native";
import { TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'; // Import from react-native-animatable
const { height } = Dimensions.get("window");
const GoogleSignInButton = () => {
  return (
    <TouchableOpacity style={styles.signInButton} onPress={() => console.log("signed in with google")} >
      <Image
          source={require('../../assets/google.png')}
          style={{height:24, width:24, margin:5}}
        />
      <Text style ={{fontSize:12, color:"white"}}>Sign in with Google</Text>
    </TouchableOpacity>
  );
};

const AppleSignInButton = () => {
  return (
    <TouchableOpacity style={styles.signInButton} onPress={() => console.log("signed in with google")}  >
      <Image
          source={require('../../assets/apple.png')}
          style={{height:28, width:28,margin:5}}
        />
      <Text style ={{fontSize:12, color:"white"}}>Sign in with Apple</Text>
    </TouchableOpacity>
  );
};

const LoginScreen = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState("login");
  const [secureEntry, setSecureEntry] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [animateIn, setAnimateIn] = useState(false); // State for controlling animation

  const togglePasswordVisibility = () => {
    setSecureEntry(!secureEntry)
  };

  useEffect(() => {
    // Trigger the animation once the component is mounted
    setAnimateIn(true);
  }, []);

  return (
    <View style={{flex:1}} >
      <Animatable.View // Apply the animation to the entire component
      animation={animateIn ? "slideInRight" : ""} // You can use any animation from the library
      duration={500}
      style={{ flex: 1 }}
    >
    <ImageBackground source={require('../../assets/placeholderImage3.jpg')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={[styles.backgroundImage, { height: 0.4 * height }]} />


        <View style={[styles.blackView, { height: 0.6 * height }]}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, activeButton === "login" && styles.activeButton]}
              onPress={() => setActiveButton("login")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, activeButton === "signup" && styles.activeButton]}
              onPress={() => setActiveButton("signup")}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>


          <View style={{ padding: 10 }}>
            <View style={styles.inputContainer}>
              <TextInput
                textColor="white"
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="white"
                value={email}
                onChangeText={(text) => setEmail(text)}
                left={<TextInput.Icon icon="mail" color="white"/>}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                textColor="white"
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={secureEntry}
                value={password}
                onChangeText={(text) => setPassword(text)}
                left={<TextInput.Icon icon="lock" color="white"/>}
                right={<TextInput.Icon onPress={() => togglePasswordVisibility()} icon={secureEntry ? 'eye' : 'eye-off'} color="white"/>}
              />
            </View>
          </View>

          <TouchableOpacity style = {styles.loginStyle} onPress={() => navigation.navigate("HomeStack")}>
            {activeButton == "login"? <Text>Login</Text> : <Text>Sign Up</Text>}
          </TouchableOpacity>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.loginButtonsContainer} >
            <GoogleSignInButton />
            <AppleSignInButton />
          </View>

          <View style={styles.termsContainer}>
            <Text style={{fontSize:12, color:"white",textAlign:"center"}} >
              By clicking "LOGIN", I agree to be bound by adidas Terms and Conditions (As they may have updated from time to time, refer to the Privacy Policy)
            </Text>
          </View>

        </View>
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
  blackView: {
    backgroundColor: "black",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  activeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
    marginBottom: 10,
    overflow: "hidden",
    color: "white",
  },
  input: {
    flex: 1,
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    color:"white"
  },
  loginStyle: {
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 5,
    zIndex: 2,
  },
  dividerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    flexDirection: "row"
  },
  dividerLine: {
    width: "40%",
    height: 1,
    backgroundColor: "white",
  },
  dividerText: {
    color: "white",
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  loginButtonsContainer:{
    marginTop:10,
    flexDirection:"row",
    flex:1,
    padding:10
  },
  signInButton:{
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    height:60,
    borderWidth:2,
    borderColor:"white",
    borderRadius:30,
    flex:1,
    padding:20
  },
  termsContainer:{
    flex:1,
    margin:10,
  }
});

export default LoginScreen;
