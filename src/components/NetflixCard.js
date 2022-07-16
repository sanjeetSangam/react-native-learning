import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";
import React from "react";

const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Netflix Card</Text>

      <View style={styles.poster}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://images.unsplash.com/photo-1598195596234-e04b82ef8adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FuZXNoYXxlbnwwfHwwfHw%3D&w=1000&q=80",
          }}
        />

        <View style={styles.posterInfo}>
          <Text style={styles.poster_title}>GANESH JI</Text>
          <Text style={styles.poster_text}>
            Ganesh ji is a prime god who is just awesome in many ways Ganesh ji
            is a prime god who is just awesome in many ways Ganesh ji is a prime
            god who is just awesome in many ways
          </Text>
        </View>

        <Button
          style={styles.buttonStyle}
          onPress={() => {
            Linking.openURL("https://sanjeet.netlify.app/");
          }}
          title="WORSHIP"
        />
      </View>
    </View>
  );
};

export default NetflixCard;

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    fontSize: 30,
    marginBottom: 20,
  },

  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: "center",
  },

  posterInfo: {
    marginVertical: 10,
    alignItems: "center",
  },

  poster_title: {
    fontSize: 20,
    marginBottom: 10,
  },
  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
  },
});
