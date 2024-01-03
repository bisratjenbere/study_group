import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  heorcontainer: {
    marginTop: SIZES.xLarge,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.lightWhite,
    borderWidth: 4,

    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
  },

  textContainer: {},

  heroTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.gray,
    textAlign: "center",
    marginBottom: 12,
  },
  heroBtn: {
    textAlign: "center",
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
  },
  cardsContainer: {
    marginTop: SIZES.medium,
    gap: SIZES.small,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.tertiary,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heroDescription: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.gray,
    textAlign: "center",
    marginBottom: 12,
  },
  heroImg: {
    width: windowWidth,
    height: 250,
    borderRadius: 10,
    resizeMode: "cover",
    paddingRight: 24,
  },
  futureContainer: {
    backgroundColor: COLORS.lightWhite,

    padding: 10,
  },
  imgContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.gray,
    borderRadius: 5,
    shadowColor: "#000",

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 24,
  },
  feedBackContainer: {
    padding: 24,
    backgroundColor: COLORS.secondary,

    marginBottom: 24,
  },
  feedback: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: COLORS.lightWhite,
    textAlign: "center",
  },
  featureText: {
    alignSelf: "flex-end",
    marginTop: 20,
    flexDirection: "row",

    gap: 3,
  },
  name: {
    alignSelf: "center",
    fontFamily: FONT.bold,
    color: COLORS.lightWhite,
    fontStyle: "italic",
  },
  university: {
    color: COLORS.lightWhite,
  },
});

export default styles;
