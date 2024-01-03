import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
  },
  formContainer: {
    height: "100%",
  },
  appName: {
    color: "#f02e65",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLORS.white,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    color: "#000",
    width: "80%",
    borderRadius: 8,
    borderColor: COLORS.gray2,
    borderWidth: 2,
    marginTop: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 1,
  },
  errorText: {
    color: "red",
    alignSelf: "center",
    marginTop: 10,
  },
  btn: {
    marginTop: 40,
    padding: 10,
    height: 45,
    backgroundColor: COLORS.tertiary,
    alignSelf: "center",
    borderRadius: 5,
    width: "60%",
    marginTop: 20,
    borderRadius: 24,
    shadowColor: COLORS.tertiary,
    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 3,
  },
  btnText: {
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpContainer: {
    marginTop: 80,
  },
  noAccountLabel: {
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  signUpLabel: {
    color: "#1d9bf0",
  },
});
export default styles;
