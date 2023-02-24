import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const InputContainer = ({ inputValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={2}>
        {inputValue}
      </Text>
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  text: {
    fontSize: Platform.OS === "web" ? 35 : 40,
    color: "black",
  },
});
