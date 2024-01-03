import {
  View,
  ScrollView,
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { COLORS, SIZES } from "../constants";

import LandingPage from "../components/Hero/Hero";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.secondary,
          },
          headerShadowVisible: true,

          headerTitle: "",
        }}
      />

      <View
        style={{
          backgroundColor: COLORS.lightWhite,
          flex: 1,
          padding: SIZES.medium,
        }}
      >
        <ScrollView>
          <LandingPage />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
