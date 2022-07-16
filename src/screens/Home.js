import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
  return (
    <View style={style.test}>
      <Text>This is home</Text>
    </View>
  );
};

const style = StyleSheet.create({
  test: {
    color: "red",
  },
});
