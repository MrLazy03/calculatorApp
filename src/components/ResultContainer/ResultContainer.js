import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";
import { useTheme } from "styled-components";

const ResultContainer = ({ output }) => {
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
        {output}
      </Text>
    </View>
  );
};

export default ResultContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 50,
  },
  text: {
    fontSize: Platform.OS === "web" ? 40 : 50,
  },
});
