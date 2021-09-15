import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";
import CustomText from "./shared/CustomText";

const Header = () => {
    return (
        <View style={styles.container}>
            <CustomText style={styles.text}>Guess Game</CustomText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingTop: 50,
        backgroundColor: colors.primary
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
 
export default Header;