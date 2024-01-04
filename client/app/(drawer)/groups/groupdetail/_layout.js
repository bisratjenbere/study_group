import { Stack } from "expo-router";
import { COLORS } from "../../../../constants";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: COLORS.blue },
        }}
      />
      <Stack.Screen
        name="chat"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: COLORS.blue },
        }}
      />
      <Stack.Screen
        name="users"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: COLORS.blue },
        }}
      />
    </Stack>
  );
}
