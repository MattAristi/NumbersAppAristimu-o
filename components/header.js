import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

import React from "react";
import {colors} from '../constants/colors';

const styles= StyleSheet.create ({
    header:{
        height: 70,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.primary,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    title: {
        fontSize: 22,
        color: colors.white,
        fontFamily:'oswaldBold'
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