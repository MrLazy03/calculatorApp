import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const ResultContainer = ({ output }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} numberOfLines={2}>
        {output}
      </Text>
    </View>
  );
};

export default ResultContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 50,
  },
  text: {
    fontSize: Platform.OS === "web" ? 40 : 50,
    color: "black",
  },
});
