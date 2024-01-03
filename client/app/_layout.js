import { Stack } from "expo-router";

import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { AuthProvider } from "../context/authContext";
import { GroupProvider } from "../context/groupContext";
import { ChatProvider } from "../context/chat";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, []);

  if (!fontsLoaded) return null;
  return (
    <AuthProvider>
      <GroupProvider>
        <ChatProvider>
          <Stack onLayout={onLayoutRootView}>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          </Stack>
        </ChatProvider>
      </GroupProvider>
    </AuthProvider>
  );
};
export default RootLayout;
