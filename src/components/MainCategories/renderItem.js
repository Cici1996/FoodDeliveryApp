import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../../constants';

const RenderItem = ({ item, onPress, selectedCategory }) => {
    return (
        <TouchableOpacity style={styles.listCategories(selectedCategory?.id, item?.id)} onPress={onPress}>
            <View style={styles.wrapperImage(selectedCategory?.id, item?.id)}>
                <Image resizeMode="contain" source={item.icon} style={styles.iconCategories} />
            </View>
            <Text style={styles.textCategories(selectedCategory?.id, item?.id)}>{item.name}</Text>
        </TouchableOpacity>
    )
}

export default RenderItem;

const styles = StyleSheet.create({
    listCategories: (data, id) => ({
        backgroundColor: (data == id) ? COLORS.primary : COLORS.white,
        padding: SIZES.padding,
        paddingBottom: SIZES.padding * 2,
        borderRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        marginRight: SIZES.padding,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }),
    wrapperImage: (data, id) => ({
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: (data == id) ? COLORS.white:COLORS.lightGray2,
        alignItems: "center",
        justifyContent: "center"
    }),
    iconCategories: {
        height: 30,
        width: 30
    },
    textCategories: (data, id) => ({
        marginTop: SIZES.padding,
        color: (data == id) ? COLORS.white : COLORS.black,
        ...FONTS.body5
    })
})
