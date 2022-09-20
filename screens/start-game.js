import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

import Card from "../components/card";
import Input from '../components/input'
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
        height:120,
        justifyContent: "center",
        alignItems:"center",
        flexGrow: 0.4,
        marginHorizontal: 10,
        marginVertical: 10,
    

    },
    
    textLabel: {
        width: '100%',
        textAlign: "center",
        marginVertical: 20,
        color: colors.text,
        fontSize: 16,
    },
   
    textInput: {
        width: '80%',
        minHeight:25,
        textAlign: "center",
        marginVertical: 25,
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
        marginTop: 15,
        
    },
   
})


const StartGameScreen = () => {
    const [number, setNumber]= useState('')


    const onHandleChangeText = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''))
    }
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
                        <Button title= 'Limpiar' onPress={() => null} color= {colors.secundary}/>
                        <Button title= 'Confirmar' onPress={() => null} color= {colors.primary}/>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen