import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { useTheme } from "styled-components";

const InputContainer = ({ inputValue }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.inputOutputBackground },
      ]}
    >
      <Text
        style={[styles.text, { color: theme.colors.primaryText }]}
        numberOfLines={2}
      >
        {inputValue}
      </Text>
    </View>
  );
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  text: {
    fontSize: Platform.OS === "web" ? 35 : 40,
  },
});
