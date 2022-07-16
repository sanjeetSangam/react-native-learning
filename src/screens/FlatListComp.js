import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";

export const FlatListComp = () => {
  const data = [
    {
      index: "1",
      name: "sanjet",
    },
    {
      index: "2",
      name: "sanjet",
    },
    {
      index: "3",
      name: "sanjet",
    },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(key) => key.index}
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.boxStyle}>
            <Text style={styles.textStyles}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    color: "white",
  },

  boxStyle: {
    backgroundColor: "blue",
    padding: "15px",
  },
});
