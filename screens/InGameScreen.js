import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import CustomButton from "../components/shared/CustomButton";
import CustomText from "../components/shared/CustomText";
import colors from "../styles/colors";
import container from "../styles/container";
import generateRandomBetween from "../utils/generateRandomBetween";

const InGameScreen = ({userNumber, setGuessRound}) => {
    const initGuess = generateRandomBetween(1, 100, userNumber)
    const [guessNum, setGuessNum] = useState(initGuess)
    const [guessHistory, setGuessHistory] = useState([initGuess])

    let currentMin = useRef(1)
    let currentMax = useRef(100)

    const handleNextGuess = dir => {
        if (dir === 'lower' && userNumber > guessNum || dir === 'greater' && userNumber < guessNum) {
            Alert.alert('Don\'t Lie!', 'You know it\'s wrong...', [{text: 'Sorry', style: 'cancel'}])
            return
        }

        if (dir === 'lower') {
            currentMax.current = guessNum
        } else {
            currentMin.current = guessNum + 1
        }

        const nextNumber = generateRandomBetween(currentMin.current, currentMax.current, guessNum)
        setGuessNum(nextNumber)
        setGuessHistory(prev => [nextNumber, ...prev])
    }

    useEffect(() => {
        if (guessNum == userNumber) {
            setGuessRound(guessHistory.length)
        }
    }, [guessNum, setGuessHistory, userNumber])

    return (
        <View style={container}>
            <CustomText style={styles.title}>Your Phone Guess</CustomText>
            <View style={styles.guessNumContainer}>
                <CustomText style={styles.guessNumText}>{guessNum}</CustomText>
            </View>
            <View style={styles.buttonGroup}>
                <CustomButton 
                    color={colors.secondary} 
                    style={{marginHorizontal: 10, width: 120}} 
                    onPress={() => handleNextGuess('lower')}
                >
                    Lower
                </CustomButton>
                <CustomButton 
                    color={colors.secondary} 
                    style={{marginHorizontal: 10, width: 120}} 
                    onPress={() => handleNextGuess('greater')}
                >
                    Greater
                </CustomButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    guessNumContainer: {
        marginVertical: 20,
        width: 100,
        backgroundColor: colors.accent,
        paddingVertical: 5,
        borderWidth: 2,
        borderRadius: 5
    },
    guessNumText: {
        textAlign: 'center',
        fontSize: 18
    },
    buttonGroup: {
        flexDirection: 'row',
        marginTop: 10
    }
})
 
export default InGameScreen;