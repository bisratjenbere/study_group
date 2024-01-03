import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { COLORS, SIZES } from "../constants";

import Login from "../components/Login/Login";

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
            backgroundColor: "#1640D6",
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
          <Login />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
