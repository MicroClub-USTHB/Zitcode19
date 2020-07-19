import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#5D71AD",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
  },
  footer: {
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: 0,
    right: 0,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 24,
  },
  textInput: {
    borderBottomColor: "#5F7FFD",
    borderBottomWidth: 2,
    alignSelf: "stretch",
    // color: "#fff",
    padding: 20,
    height: 60,
    backgroundColor: "#dfdfdf",
    margin: 20,
  },
  addButton: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "#5F7FFD",
    width: 30,
    height: 60,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
  },
});

export default styles;
