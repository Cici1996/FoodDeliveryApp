import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'

export default function HeaderComponent({currentLocation}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.wrapperNearby}>
                <Image source={icons.nearby} style={styles.iconNearby} />
            </TouchableOpacity>
            <View style={styles.containerTexbox}>
                <View style={styles.infoLocation}>
                    <Text style={{ ...FONTS.h3 }}>{currentLocation}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.wrapperNearbyRight}>
                <Image source={icons.bag} style={styles.iconNearby} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row"
    },
    wrapperNearby: {
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: "center"
    },
    wrapperNearbyRight: {
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: "center"
    },
    iconNearby: {
        width: 30,
        height: 30
    },
    containerTexbox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    infoLocation: {
        backgroundColor: COLORS.lightGray3,
        width: "70%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius
    }
})
