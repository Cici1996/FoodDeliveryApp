import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'
import { categoryData } from '../../Dummy'

export default function RenderItem({ item,onPress }) {

    const [categories, setcategories] = useState(categoryData);

    const getCategoryById = (id) => {
        let dataCategories = categories.filter(a => a.id == id);

        if (dataCategories.length > 0)
            return dataCategories[0].name;

        return "";
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={{ marginBottom: SIZES.padding * 2 }}>
                <Image source={item.photo} resizeMode="cover" style={styles.image} />
                <View style={styles.info}>
                    <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                </View>
            </View>
            <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
            <View style={styles.wrapperRating}>
                <Image source={icons.star} style={styles.imageRating} />
                <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
                <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    {
                        item.categories.map((categoryId) => {
                            return (
                                <View style={{ flexDirection: "row" }} key={categoryId}>
                                    <Text style={{ ...FONTS.body3 }}>{getCategoryById(categoryId)}</Text>
                                    <Text style={{ ...FONTS.h3, color: COLORS.darkGray }}> . </Text>
                                </View>
                            )
                        })
                    }
                    {
                        [1, 2, 3].map((price) => (
                            <Text key={price} style={{ ...FONTS.body3, color: (price == item.priceRating) ? COLORS.black : COLORS.darkGray }}>$</Text>
                        ))
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.padding * 2,
    },
    image: {
        borderRadius: SIZES.radius,
        height: 200,
        width: "100%"
    },
    info: {
        bottom: 0,
        backgroundColor: COLORS.white,
        height: 50,
        width: SIZES.width * 0.3,
        borderTopRightRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
    wrapperRating: {
        marginTop: SIZES.padding,
        flexDirection: "row"
    },
    imageRating: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        marginRight: 10
    }
})
