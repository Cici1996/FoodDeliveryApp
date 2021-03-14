import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ButtonPrimary } from '..'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'

export default function Order({currentItem}) {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={{ ...FONTS.h3 }}>{currentItem} Items in Cart</Text>
                <Text style={{ ...FONTS.h3 }}>$45</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={icons.pin} resizeMode="contain" style={styles.icon} />
                    <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>Location</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Image source={icons.creditCards} resizeMode="contain" style={styles.icon} />
                    <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
                </View>
            </View>
            <View style={{padding:SIZES.padding * 2,alignItems:"center",justifyContent:"center"}}>
                <ButtonPrimary label="Order" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 3,
        borderBottomColor: COLORS.lightGray2,
        borderBottomWidth: 1
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: COLORS.darkGray
    }
})
