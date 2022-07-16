import { View, Text, StyleSheet, Button, Alert } from "react-native";
import React from "react";

const OurButton = () => {
  return (
    <View>
      <Text style={styes.textStyle}>Buttons</Text>
      <Button onPress={() => Alert.alert("yes")} title="Join now" />
    </View>
  );
};

export default OurButton;

const styes = StyleSheet.create({
  textStyle: {
    marginTop: 200,
    textAlign: "center",
    marginVertical: 200,
    fontSize: 30,
  },
});
