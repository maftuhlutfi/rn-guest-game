import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({children, color, style, ...props}) => {
    return (
        <Pressable style={{...styles.button, ...style, backgroundColor: color}} {...props}>
            <Text style={styles.text}>{children}</Text>
        </Pressable>
    );
}
 
export default CustomButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        textAlign: 'center'
    }
})