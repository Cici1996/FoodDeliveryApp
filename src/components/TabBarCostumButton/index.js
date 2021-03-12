import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../../constants';
import Svg, { Path } from 'react-native-svg';

export default function TabBarCostumButton({ accessibilityState, children, onPress }) {
    const isSelected = accessibilityState.selected;
    if (isSelected) {
        return (
            <View style={styles.wrapperActive}>
                <View style={styles.wrapperActive1}>
                    <View style={styles.wrapperActive2}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={styles.wrapperActive2}></View>
                </View>

                <TouchableOpacity style={styles.containerActive}>
                    {children}
                </TouchableOpacity>
            </View>
        )

    } else {
        return (
            <TouchableOpacity style={styles.container} activeOpacity={1} onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 60,
        backgroundColor: COLORS.white
    },
    containerActive: {
        top: -22.5,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.white
    },
    wrapperActive: {
        flex: 1,
        alignItems: "center"
    },
    wrapperActive1: {
        flexDirection: "row",
        position: "absolute",
        top: 0
    },
    wrapperActive2: {
        backgroundColor: COLORS.white,
        flex: 1
    }
})
