import { StyleSheet, View } from "react-native";
import React from "react";
import ActionButton from "../ActionButton";

const ButtonsContainer = ({ handleInput }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <ActionButton
          text="AC"
          handleInput={handleInput}
          customStyles={styles.background1}
        />
        <ActionButton
          text="( )"
          handleInput={handleInput}
          customStyles={styles.background2}
        />
        <ActionButton
          text="%"
          handleInput={handleInput}
          customStyles={styles.background2}
        />
        <ActionButton
          text="/"
          handleInput={handleInput}
          customStyles={styles.background2}
        />
        <ActionButton
          text="*"
          handleInput={handleInput}
          customStyles={styles.background2}
        />
      </View>

      <View style={styles.rowContainer}>
        <ActionButton text="6" handleInput={handleInput} />
        <ActionButton text="7" handleInput={handleInput} />
        <ActionButton text="8" handleInput={handleInput} />
        <ActionButton text="9" handleInput={handleInput} />
        <ActionButton
          text="-"
          handleInput={handleInput}
          customStyles={styles.background2}
        />
      </View>
      <View style={styles.rowContainer}>
        <ActionButton text="2" handleInput={handleInput} />
        <ActionButton text="3" handleInput={handleInput} />
        <ActionButton text="4" handleInput={handleInput} />
        <ActionButton text="5" handleInput={handleInput} />
        <ActionButton
          text="+"
          handleInput={handleInput}
          customStyles={styles.background2}
        />
      </View>
      <View style={styles.rowContainer}>
        <ActionButton text="0" handleInput={handleInput} />
        <ActionButton text="1" handleInput={handleInput} />
        <ActionButton text="." handleInput={handleInput} />
        <ActionButton text="backspace" handleInput={handleInput} />
        <ActionButton
          text="="
          handleInput={handleInput}
          customStyles={styles.background2}
        />
      </View>
    </View>
  );
};

export default ButtonsContainer;

const styles = StyleSheet.create({
  container: { flex: 5, paddingBottom: 20},
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  background1: {
    backgroundColor: "#aee9f5",
  },
  background2: {
    backgroundColor: "#7df0a7",
  },
});
