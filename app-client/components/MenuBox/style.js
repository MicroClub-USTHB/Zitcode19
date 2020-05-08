import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    //backgroundColor:'red',
    width: 160,
    height: 200,
  },
  box: {
    width: "100%",
    backgroundColor: "blue",
    height: "80%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  titleBox: {
    width: "100%",
    height: "20%",
    // backgroundColor:'green',
    justifyContent: "center",
    alignItems: "center",
  },
  cercleBox: {
    width: "80%",
    height: "80%",
    backgroundColor: "#ffffff20",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
  },
});

export default Styles;
