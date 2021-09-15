import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/shared/CustomButton";
import CustomText from "../components/shared/CustomText";
import colors from "../styles/colors";
import container from "../styles/container";

const GameOverScreen = ({userNumber, guessRounds, onRestart}) => {
    return (
        <View style={container}>
            <CustomText style={styles.title}>Your Phone is Correct!</CustomText>
            <CustomText style={styles.desc}>
                It needed <CustomText style={styles.highlight}>
                    {guessRounds}
                </CustomText> rounds to guess the number <CustomText style={styles.highlight}>
                    {userNumber}
                </CustomText>.
            </CustomText>
            <CustomButton color={colors.secondary} onPress={onRestart}>Play Again</CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20
    },
    desc: {
        fontSize: 16,
        marginVertical: 20,
        textAlign: 'center'
    },
    highlight: {
        fontWeight: 'bold',
        color: colors.accent
    }
})
 
export default GameOverScreen;