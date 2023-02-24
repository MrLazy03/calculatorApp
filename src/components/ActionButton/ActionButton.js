import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const ActionButton = ({ text, handleInput, customStyles }) => {
  return (
    <TouchableOpacity
      style={[styles.button, customStyles]}
      onPress={() => handleInput(text)}
    >
      {text === "backspace" ? (
        <Ionicons name="backspace" size={30} color="black" />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    height: 90,
    width: 90,
    borderRadius: 50,
    backgroundColor: "#dee2e3",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: { fontSize: 35, color: "black", fontWeight: "bold" },
});
