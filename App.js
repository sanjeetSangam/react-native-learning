// import librarires
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import OurButton from "./src/components/OurButton";
import TouchOpacity from "./src/components/TouchOpacity";
import { FlatListComp } from "./src/screens/FlatListComp";
import { Home } from "./src/screens/Home";
import ImagesFILE from "./src/screens/Images";

// make a component
const App = () => {
  return (
    <View style={styles.container}>
      {/* <ImagesFILE /> */}
      <OurButton />
      <TouchOpacity />
    </View>
  );
};

// export component
export default App;

// styles with stylesheet from react navtive
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
