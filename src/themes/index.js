import { DefaultTheme } from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#051526",
    background: "#f0e6e9",
    primaryText: "black",
    secondaryText: "white",
    statusbar: "#051526",
    inputBackground: "gray",
    buttonBackground1: "#aee9f5",
    buttonBackground2: "#7df0a7",
    inputOutputBackground: "#e6e6e6",
  },
};

export default theme;
