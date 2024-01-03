import { Link, Redirect, usePathname } from "expo-router";
import { Text } from "react-native";
import { useEffect } from "react";

export default function Page() {
  return <Redirect href="/groups/(tabs)" />;
}
