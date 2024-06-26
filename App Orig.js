import { StatusBar } from "expo-status-bar";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  SafeAreaView,
} from "react-native";
import { RestaurantsScreen } from "./src/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import{useFonts as useOswald, Oswald_400Regular} from "@expo-google-fonts/oswald";
import{useFonts as useLato, Lato_400Regular} from "@expo-google-fonts/lato";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
