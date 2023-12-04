import { StyleSheet } from "react-native";

export default StyleSheet.create({
    app: {
         textAlign: 'center',
         justifyContent: "center",
         alignItems: "center",
         flexGrow: 1,
         padding: 20,
         backgroundColor: "#696969",
    },

    textGrande: {
        fontSize: 24
    },
    
    inputText: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10,
        color: "black", 
        backgroundColor: "white", 
    },
    
    botao: {
        backgroundColor: "gray",
        padding: 5,
        margin: 5,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    }

})