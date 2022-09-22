import { StyleSheet, Text, View } from "react-native";

import React  from "react";
import {colors} from '../constants/colors';

const styles= StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderColor:colors.primary,
        marginVertical:10,
        textAlign:"center",
        padding:5,
        borderRadius:10,
        justifyContent:"center"
    },
    number: {
        fontSize: 22,
        fontWeight:'bold',
        



    },
})

const NumberContainer = ({children}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer