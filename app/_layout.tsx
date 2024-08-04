import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
          headerStyle: {
            backgroundColor: "green"
          },
          headerTintColor: "white"
        }}>
          {/* Optionally configure static options outside the route.*/}

          
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="(stack)/notes/new" options={{ title: "New Note" }} />
          <Stack.Screen name="(stack)/notes/[id]/view" options={{ title: "View Note" }} />

          

        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
