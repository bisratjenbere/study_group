import { Redirect } from "expo-router";

import { useContext } from "react";
import { authContext } from "../context/authContext";

export default function Page() {
  const { isLoggedIn } = useContext(authContext);

  return isLoggedIn ? (
    <Redirect href={"/(drawer)/home"} />
  ) : (
    <Redirect href={"landing"} />
  );
}
