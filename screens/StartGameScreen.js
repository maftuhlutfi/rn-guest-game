import React, { useState } from "react";
import { Alert, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";
import CustomButton from "../components/shared/CustomButton";
import CustomText from "../components/shared/CustomText";
import colors from "../styles/colors";
import container from "../styles/container";

const StartGameScreen = ({onConfirmNumber}) => {
    const [numberInput, setNumberInput] = useState('')

    const handleChangeText = text => {
        setNumberInput(text.replace(/[^0-9]/g, ''))
    }

    const handleSubmit = () => {
        if (numberInput <= 0 || numberInput == NaN || numberInput > 99) {
            Alert.alert('Invalid Number', 
                'Please enter a valid number between 1 - 99', 
                [{
                    text: 'Okay', 
                    style: 'destructive', 
                    onPress: () => setNumberInput('')
                }]
            )
            return
        }
        onConfirmNumber(numberInput)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={container}>
                <CustomText style={styles.text}>
                    Let's see how fast your phone to guess the number!
                </CustomText>
                <View style={styles.textInputContainer}>
                    <CustomText style={styles.enterNumberText}>
                        ENTER NUMBER
                    </CustomText>
                    <TextInput 
                        style={styles.textInput} 
                        keyboardType='number-pad'
                        onChangeText={handleChangeText}
                        value={numberInput}
                        blurOnSubmit
                        maxLength={2}
                    />
                </View>
                <CustomButton color={colors.secondary} onPress={handleSubmit}>
                    Start Game
                </CustomButton>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20
    },
    textInputContainer: {
        marginTop: 20,
        marginBottom: 30,
        width: '100%',
        alignItems: 'center'
    },
    enterNumberText: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textInput: {
        textAlign: 'center',
        borderWidth: 1,
        width: 100,
        marginTop: 10,
        fontSize: 20,
        paddingBottom: 5,
        backgroundColor: colors.accent
    }
})
 
export default StartGameScreen;