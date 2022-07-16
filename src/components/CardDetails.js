import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const CardDetails = () => {
  return (
    <View>
      <Image
        style={styes.imageStyle}
        source={require("../../assets/Beautiful-God-Mahadev-Images-Wallpaper.jpg")}
      />
    </View>
  );
};

export default CardDetails;

const styes = StyleSheet.create({
  listStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 30,
  },
  imageStyle: {
    width: 300,
    height: 300,
    marginTop: "10px",
  },
});
