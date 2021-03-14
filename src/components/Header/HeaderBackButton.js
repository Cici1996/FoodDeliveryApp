import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'

export default function HeaderBackButton({ restaurant, onPressBack }) {
    return (
        <View style={{ flexDirection: "row",marginTop:5 }}>
            <TouchableOpacity style={styles.wrapperIconBack} onPress={onPressBack}>
                <Image resizeMode="contain" source={icons.arrow_left} style={{ ...FONTS.icon }} />
            </TouchableOpacity>
            <View style={styles.wrapperName}>
                <View style={styles.boxName}>
                    <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.wrapperIconMenu}>
                <Image resizeMode="contain" source={icons.menu} style={{ ...FONTS.icon }} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperIconBack: {
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: "center"
    },
    wrapperIconMenu: {
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: "center"
    },
    wrapperName: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    boxName: {
        backgroundColor: COLORS.lightGray3,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: SIZES.padding * 3,
        borderRadius: SIZES.radius
    }
})
