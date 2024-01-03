import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  groupItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 12,
    marginBottom: 8,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  groupName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  groupSubject: {
    fontSize: 14,
    color: "#777",
  },
  groupImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
});
export default styles;
