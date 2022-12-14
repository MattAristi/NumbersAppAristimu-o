import { Alert, Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState }  from "react";

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


const GameScreen= ({selectedNumber, onGameOver}) => {
    const [currentGuest,setCurrentGuess]=useState(generateRandomNumberBetween(1, 100, selectedNumber))
    const [rounds, setRounds]= useState(0)
    const currentLow= useRef(1)
    const currentHigh= useRef(100)

    const onHandleNextGuess = (direction) => {
        if ((direction==='lower' && currentGuest < selectedNumber)||
            (direction==='greater' && currentGuest > selectedNumber)){
                Alert.alert('No mientas', 'Tu sabes que está mal',[{text:'sorry', style: 'cancel'}])
                return
            }
        if (direction==='lower'){
            currentHigh.current=currentGuest
        } else {
            currentLow.current=currentGuest
        }
        const nextNumber = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuest);
        setCurrentGuess(nextNumber)
        setRounds(rounds => rounds+1)  
    }
        useEffect(() => {
            if (currentGuest===selectedNumber){
            onGameOver(rounds)
        }
        }, [currentGuest, selectedNumber, onGameOver])
        

    return(
        <View style={styles.container}>
            <Card style={styles.card}>
                <Text style={styles.title}>Opponent's assumption</Text>
                <NumberContainer>{currentGuest}</NumberContainer>
                <View style={styles.buttonContainer}>
                    <Button title='Menor' onPress={()=> onHandleNextGuess('lower')} color= {colors.secundary}/>
                    <Button title='Mayor' onPress={()=> onHandleNextGuess('greater')} color= {colors.primary}/>
                </View>
            </Card>
        </View>
    )
}

export default GameScreen