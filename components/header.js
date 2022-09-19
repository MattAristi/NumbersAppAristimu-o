import { StyleSheet, Text, View } from "react-native";

import React from "react";

const styles= StyleSheet.create ({
    header:{
        height: 100,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#d3b9aa',
        paddingTop: 20,
    },
    title: {
        fontSize: 22,
        color: 'fffff',
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