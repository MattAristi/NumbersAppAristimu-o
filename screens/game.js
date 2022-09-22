import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState }  from "react";

import Card from "../components/card";
import NumberContainer from "../components/number-container";
import {colors} from '../constants/colors';
import {generateRandomNumberBetween} from '../utils/functions'

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',

        marginVertical: 10,
    },
    card: {
        marginHorizontal: 20,
        justifyContent: 'center',
        width: '80%',
        height: 200,
        alignItems: 'center',
        marginTop: 15,
        
        
    },
    buttonContainer: {
        width: '75%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginHorizontal: 20,
    },
    title:{
        fontFamily:'oswaldBold',
        fontSize:18,
        marginBottom:20,
    }
})


const GameScreen= ({selectedNumber}) => {
    const [currentGuest,setCurrentGuess]=useState(generateRandomNumberBetween(1, 100, selectedNumber))
    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.title}>Opponent's assumption</Text>
                <NumberContainer>{currentGuest}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button title='Menor' onPress={()=>null} color= {colors.secundary}/>
                    <Button title='Mayor' onPress={()=>null} color= {colors.primary}/>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen