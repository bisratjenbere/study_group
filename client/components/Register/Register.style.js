import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    padding: 10,
  },
  formContainer: {
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },
  appName: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    color: "#000",
    width: "90%",
    borderRadius: 8,
    borderColor: COLORS.gray2,
    borderWidth: 1,
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
  loginContainer: {
    marginTop: 60,
  },
  haveAccountLabel: {
    color: "#484848",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  loginLabel: {
    color: "#1d9bf0",
  },
});

export default styles;
