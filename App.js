import { StatusBar } from "expo-status-bar";
import AppNavigation from "./src/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/themes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
