import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants'

export default function ButtonPrimary({ label,onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width * 0.9,
        backgroundColor: COLORS.primary,
        padding: SIZES.padding,
        alignItems: "center",
        borderRadius: SIZES.radius
    },
    text:{
        color:COLORS.white,
        ...FONTS.h2
    }
})
