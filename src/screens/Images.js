import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import CardDetails from "../components/CardDetails";

const ImagesFILE = () => {
  return (
    <View style={styes.listStyle}>
      <Text style={styes.textStyle}>Mahadev</Text>

      <CardDetails />
    </View>
  );
};

export default ImagesFILE;

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
