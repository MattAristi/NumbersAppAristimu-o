import { StyleSheet, Text, View } from "react-native";

import React from "react";
import {colors} from '../constants/colors';

const styles= StyleSheet.create ({
    header:{
        height: 100,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.primary,
        paddingTop: 20,
    },
    title: {
        fontSize: 22,
        color: colors.white,
        fontWeight: 'bold',
    },
})
const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style= {styles.title}>{title}</Text>
        </View>
    )
}

export default Header