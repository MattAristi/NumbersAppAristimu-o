import React, { useState }  from "react";
import { StyleSheet, Text, View } from "react-native";

import Card from "../components/card";
import NumberContainer from "../components/number-container";
import {generateRandomNumberBetween} from '../utils'

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',

        marginVertical: 10,
    },
})


const GameScreen= ({selectedNumber}) => {
    const [currentGuest,setCurrentGuess]=useState(generateRandomNumberBetween(1, 100, selectedNumber))
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.title}>Opponent's assumption</Text>
                <NumberContainer>{currentGuest}</NumberContainer>
                <View stile={styles.buttonContainer}>
                    <Button title='Menor' onPress={()=>null} />
                    <Button title='Mayor' onPress={()=>null}/>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen