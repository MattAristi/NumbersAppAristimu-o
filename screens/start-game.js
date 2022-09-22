import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import Card from "../components/card";
import Input from '../components/input'
import NumberContainer from "../components/number-container";
import React  from "react";
import {colors} from '../constants/colors';
import { useState } from "react";

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',

        marginVertical: 10,
    },

    title: {
        fontSize: 16,
        color: colors.black,
        fontWeight: 'bold',
        marginVertical: 15,
    },
    
    inputContainer: {
        width:'80%',
        height:200,
        justifyContent: "center",
        alignItems:"center",
        marginHorizontal: 10,
        marginVertical: 5,
    

    },
    
    textLabel: {
        width: '100%',
        textAlign: "center",
        marginVertical: 10,
        color: colors.text,
        fontSize: 16,
    },
   
    textInput: {
        width: '80%',
        textAlign: "center",
        marginVertical: 10,
        color: colors.text,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        fontSize: 22,
        
    },
    buttonContainer: {
        marginHorizontal:20,
        flexDirection: 'row',
        width: '80%',
        justifyContent: "space-around",
        marginTop: 10,
        
    },
    summaryContainer: {
        width: '70%',
        marginHorizontal:5,
        marginTop:5,
        paddingVertical: 20,
        marginVertical: 15,
        justifyContent:"center",
        alignItems:"center",
    },
    summaryText: {
        fontSize:18,
        textAlign: "center",


    },
    
   
})


const StartGameScreen = () => {
    const [confirmed, setConfirmed]=useState(false)
    const [selectedNumber, setSelectedNumber]= useState(0)
    const [number, setNumber]= useState('')

    const onReset = () => {
        setNumber('')
        setSelectedNumber('')
        setConfirmed(false)
        Keyboard.dismiss()
    }

    const onHandleChangeText = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''))
    }

    const onConfirm= () => {
        const chosenNumber = parseInt(number, 10)
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99) return;
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setNumber('')
    }

    const confirmedOutput = () => confirmed && (
        <Card style={styles.summaryContainer}>
            <Text style= {styles.summaryText}>Chosen</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button
                title="Syart game"
                onPress={() => null}
                color={colors.primary}
            />
        </Card>
    )
    return(
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Start Game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.textLabel}>Chose a number</Text>
                    <Input 
                        style={styles.textInput} 
                        keyboardType='numeric'  
                        maxLength={2}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => onHandleChangeText(text)}
                        value={number}
                    />
                
                    <View style= {styles.buttonContainer}>
                        <Button title= 'Limpiar' onPress={onReset} color= {colors.secundary}/>
                        <Button title= 'Confirmar' onPress={onConfirm} color= {colors.primary}/>
                    </View>
                </Card>
                {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen