import { Button, Dimensions, Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import Card from "../components/card";
import Input from '../components/input'
import NumberContainer from "../components/number-container";
import React  from "react";
import {colors} from '../constants/colors';
import { useState } from "react";

const {height, width}= Dimensions.get('window')

const styles= StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        fontFamily:'oswaldBold',
        marginVertical: 10,
    },
    containerScroll: {
        flex: 1,
    },

    title: {
        fontSize: 16,
        color: colors.black,
        fontFamily:'oswaldBold',
        marginVertical: 15,
    },
    
    inputContainer: {
        width: width *0.8,
        height:200,
        justifyContent: "center",
        alignItems:"center",
        marginHorizontal: 10,
        marginVertical: 5,
        fontFamily:'oswaldRegular',
    

    },
    
    textLabel: {
        width: width,
        textAlign: "center",
        marginVertical: 10,
        color: colors.text,
        fontSize: 16,
        fontFamily:'oswaldBold',
    },
   
    textInput: {
        width: width * 0.5,
        textAlign: "center",
        marginVertical: 10,
        color: colors.text,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2,
        fontSize: 22,
        fontFamily:'oswaldRegular',
        
        
    },
    buttonContainer: {
        marginHorizontal:20,
        flexDirection: 'row',
        width: width * 0.8,
        justifyContent: "space-around",
        marginTop: 10,
        fontFamily:'oswaldBold',
        
    },
    summaryContainer: {
        width: width * 0.7,
        marginHorizontal:5,
        marginTop:5,
        paddingVertical: 20,
        marginVertical: 15,
        justifyContent:"center",
        alignItems:"center",
        fontFamily:'oswaldRegular',
    },
    summaryText: {
        fontSize:18,
        textAlign: "center",
        fontFamily:'oswaldBold',


    },
    
   
})


const StartGameScreen = ({onStartGame}) => {
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

    const onHandleStartGame = () =>{
        onStartGame(selectedNumber)
    }

    const confirmedOutput = () => confirmed && (
        <Card style={styles.summaryContainer}>
            <Text style= {styles.summaryText}>Chosen</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button
                title="Start game"
                onPress={onHandleStartGame}
                color={colors.primary}
            />
        </Card>
    )
    return(
        <KeyboardAvoidingView style= {styles.containerScroll} behavior={Platform.OS==='android' ? 'padding' : 'position'} keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss}>
            <ScrollView style= {styles.containerScroll}>
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
            </ScrollView>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default StartGameScreen