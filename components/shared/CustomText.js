import React from "react";
import { StyleSheet, Text } from "react-native";

const CustomText = ({style, children}) => {
    return (
        <Text style={{...style, ...styles.text}}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'ibm-plex',
    }
})
 
export default CustomText;