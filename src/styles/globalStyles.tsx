import { StyleSheet } from "react-native";
import { myColors } from "./colors"; 

export const Styles = StyleSheet.create({
    btnDark: {
        width: 85,
        height: 85,
        borderRadius: 25,
        backgroundColor: myColors.darkGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
        fontWeight: "600",
    },
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 10,
        width: "100%",
        alignItems: "center",
    },
    screenFirstNumber: {
        fontSize: 100,
        color: myColors.white,
        fontWeight: '300',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.lightGray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    historyContainer: {
        top: 80,
        maxHeight: 500,
        width: "90%",
        alignSelf: "center",
        padding: 10,
        backgroundColor: myColors.dark,
        borderRadius: 10,
        marginBottom: 10,
    },
    historyText: {
        fontSize: 18,
        color: myColors.white,
        textAlign: "right",
        marginVertical: 2,
    },
    resultContainer: {
        width: "90%",
        justifyContent: "center",
        alignSelf: "center",
        marginTop:5,
    },
    resultText: {
        fontSize: 50,
        color: myColors.white,
        fontWeight: "600",
        textAlign: "right",
    },
});
