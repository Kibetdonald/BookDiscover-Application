import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons'
import { ThemeColors } from "../Theme/Index";

const { width, height } = Dimensions.get("window");

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: height / 4,
          justifyContent: "center",
          paddingLeft: "10%",
        }}
      >
        <Text style={styles.BannerText}>Discover Your Next </Text>
        <Text style={styles.BannerText}>Read</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../assets/intro.png")}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <View/>
        <Text style={styles.buttonText}>Discover</Text>
        <View style={styles.cirle}>
        <AntDesign name="doubleright" size={18} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "8%",
  },
  BannerText: {
    fontSize: 46,
    fontWeight: "600",
    paddingTop: 10,
    color: ThemeColors.bgColor(600)
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#CCFF37",
    marginHorizontal: "10%",
    padding: 10,
    borderRadius: 14,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 20,
    fontWeight: "600"
  },
  cirle:{
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  }
 
});
