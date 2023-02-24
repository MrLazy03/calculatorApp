import { StyleSheet, View, Platform, Dimensions } from "react-native";

import React, { useState } from "react";
import InputContainer from "../../components/InputContainer";
import ResultContainer from "../../components/ResultContainer";
import ButtonsContainer from "../../components/ButtonsContainer";
import { valueType } from "../../utilities";
import { evaluate } from "mathjs";

const windowHeight = Dimensions.get("window").height;

const HomeScreen = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    const inputType = valueType(value);

    switch (inputType) {
      case "digit":
        setInput((prev) => prev + value);
        break;
      case "operation": {
        // if last enterted value is also a operator then deleting
        // the last chracter and adding new operator
        let lastInput = valueType(input.slice(-1));
        if (lastInput === "operation") {
          setInput((prev) => {
            prev = prev.slice(0, -1);
            return prev + value;
          });
        } else {
          setInput((prev) => prev + value);
        }
        break;
      }
      case "clear":
        setInput("");
        setResult("");
        break;
      case "back":
        setInput((prev) => prev.slice(0, -1));
        break;
      case "calculate":
        // calculte only when last entered value is not a operator
        let lastInput = valueType(input.slice(-1));
        if (lastInput !== "operation") {
          try {
            setResult(evaluate(input));
          } catch {
            setResult("invalid input");
          }
        }
        break;
    }
  };
  return (
    <View style={styles.container}>
      <InputContainer inputValue={input} />
      <ResultContainer output={result} />
      <ButtonsContainer handleInput={handleInput} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      web: {
        width: 550,
        height: windowHeight,
        alignSelf: "center",
      },
    }),
  },
});
