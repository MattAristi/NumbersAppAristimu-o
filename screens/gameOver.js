import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { useEffect, useState } from "react"

import Card from "../components/card"
import React  from "react";
import {colors} from '../constants/colors';

const {height, width}= Dimensions.get('window')

const styles= StyleSheet.create ({
    container: {
        flex: 1,      
        alignItems: 'center',
       
    },
    
    containerScroll: {
        flex: 1,
    },
    resultContainer:{
        marginTop: 10,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.8,
    },
    resultContainerLandScp:{
        marginTop: 10,
        flexDirection:'row',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.8,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom:10,
    },
    dataContainer:{
        marginHorizontal:20,
    },
    dataContainerLandScp: {
        marginHorizontal:30,
        justifyContent:'center',
        alignItems: "center",
    },
    text: {
        marginBottom:10,
    }
})

const GameOver = ({roundsNumber, userNumber, onRestartGame}) => {

    const [isPortrait, setIsPortrait] = useState(true)

    const onPortrait = () => {
        const dim = Dimensions.get('screen')
        return dim.width<=dim.height
    }

    const statePortrait = ()=> {
        setIsPortrait(onPortrait)
    }

    useEffect(()=>{
        Dimensions.addEventListener('change', statePortrait())
        
        return ()=>{
            Dimensions.addEventListener('change', statePortrait())
            
        }
    })
    
    return (
        <ScrollView style= {styles.containerScroll}>
        <View style= { styles.container}>
            <Card style={isPortrait ? styles.resultContainer : styles.resultContainerLandScp}>
                <Image source={{ uri: 'https://img.freepik.com/premium-vector/game-illustration-vector-tshirt-jacket-hoodie-can-be-used-stickers-etc_552255-1288.jpg?w=1060'}} style={styles.image}/>            
                <View style={isPortrait ? styles.dataContainer : styles.dataContainerLandScp}>
                <Text style= {styles.text}>Intentos: {roundsNumber} </Text>
                <Text style= {styles.text}>Tu numero: {userNumber}</Text>
                <Button title='Reiniciar' onPress={onRestartGame} color={colors.primary}></Button>
                </View>
            </Card>
            
        </View>
        </ScrollView>
    )
}
export default GameOver