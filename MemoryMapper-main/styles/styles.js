import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 80,
  },
  markerSize: {
    width: 40,
    height: 40,
  },
  iconSizeBig: {
    width: 30,
    height: 30,
  },
  darkModeButtonAndroid: {
    position: "absolute",
    top: 50,
    left: 9,
    padding: 5,
  },
  darkModeButtonIos: {
    position: "absolute",
    top: 50,
    right: 9,
    padding: 5,
  },
  container3: {
    width: Platform.OS === "ios" ? 80 : "100%",
    height: 160,
  },
  spaceVertical: {
    height: 5,
  },
  titleText2: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#32A855",
  },
  sameRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceHorizontal: {
    width: 10,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  centerContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  sameRow: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    marginBottom: 20,
  },
  arrowContainer: {
    flexDirection: "column",
  },
  arrowImage: {
    width: 30,
    height: 30,
  },
  gpsImage: {
    width: 36,
    height: 38,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#32A855",
  },
  spaceHorizontal: {
    width: 10,
  },
  spaceVertical: {
    height: 5,
  },
  spaceVerticalBig: {
    height: 40,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#32A855",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: "cover",
  },
  belowImage: {
    resizeMode: "cover",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: "#32A855",
  },
  commentField: {
    borderWidth: 1,
    borderColor: "#32A855",
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  addButton: {
    flex: 1,
    backgroundColor: "#32A855",
    borderColor: "#007F46",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 5,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "#32A855",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 5,
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextWhite: {
    color: "white",
    textAlign: "center",
  },
  buttonTextGreen: {
    color: "#32A855",
    textAlign: "center",
  },
  containerList: {
    flex: 1,
    padding: 16,
    paddingTop: 10,
  },
  titleList: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  titleAddUpdate: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  touchableRow: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#32A855",
    margin: 5,
    padding: 5,
  },
  touchableIcon: {
    marginLeft: 15,
    padding: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  cursive: {
    fontStyle: "italic",
  },
  flex1: {
    flex: 1,
  },
  imageSizeBig: {
    width: 160,
    height: 160,
  },
  iconSizeMedium: {
    width: 25,
    height: 25,
  },
  expandedMemoryInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  expandedMemoryIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 1,
    marginTop: 5,
  },
  modalIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 260,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: (windowHeight - 360) / 2,
    marginLeft: (windowWidth - 260) / 2,
    padding: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#32A855",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalImage: {
    width: 160,
    height: 160,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalCloseButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalCloseButtonText: {
    color: "red",
    fontSize: 30,
  },
  modalListButton: {
    position: "absolute",
    top: 15,
    left: 10,
  },
});
