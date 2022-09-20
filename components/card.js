import { StyleSheet, View } from "react-native";

import React from "react";
import {colors} from '../constants/colors';

const styles= StyleSheet.create ({
    
    container: {
       
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        textShadowOffset: {
            width: 0,
            height: 2,
        },
        elevation:4,
        shadowColor: colors.black,
        backgroundColor: colors.white,
        borderRadius:5,
    

    },
})

const Card = ({children,style}) => {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

export default Card