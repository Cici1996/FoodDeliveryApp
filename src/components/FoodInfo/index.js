import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import { COLORS, FONTS, icons, SIZES } from '../../../constants'

export default function FoodInfo({ data,currentItemInChart }) {
    const [orderItems, setorderItems] = useState([]);

    const editOrder = (action, menuId, price) => {
        let orderList = orderItems.slice();
        let item = orderList.filter(a => a.menuId == menuId);

        if (action === "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1;
                item[0].qty = newQty;
                item[0].total = item[0].qty * price;
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
                item.push(newItem)
            }
            setorderItems(orderList)
        } else if (action === "-") {
            if (item.length > 0 && item[0].qty >= 1) {
                let newQty = item[0].qty - 1;
                item[0].qty = newQty;
                item[0].total = item[0].qty * price;
            }

            setorderItems(orderList)
        }
        
        currentItemInChart(item)
    }

    const getOrderQty = (menuId) => {
        let orderItem = orderItems.filter(a => a.menuId == menuId);

        if (orderItem.length > 0) {
            return orderItem[0].qty;
        }

        return 0;
    }

    return (
        <Animated.ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}>
            {
                data?.menu.map((item, index) => (
                    <View key={`menu-${index}`} style={{ alignItems: "center" }}>
                        <View style={{ height: SIZES.height * 0.35 }}>
                            <Image source={item?.photo} style={{ width: SIZES.width, height: "100%" }} resizeMode="cover" />
                            <View style={styles.quantityWrapper}>
                                <TouchableOpacity style={styles.quantityButton}
                                    onPress={() => editOrder("-", item?.menuId, item?.price)}>
                                    <Text style={{ ...FONTS.body1 }}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.quantityNumber}>
                                    <Text style={{ ...FONTS.h2 }}>{getOrderQty(item?.menuId)}</Text>
                                </View>
                                <TouchableOpacity style={styles.quantityButtonPlus}
                                    onPress={() => editOrder("+", item?.menuId, item?.price)}>
                                    <Text style={{ ...FONTS.body1 }}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.nameWrapper}>
                            <Text style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}>{item?.name} - {item.price.toFixed(2)}</Text>
                            <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Image style={{ width: 20, height: 20, marginRight: 10 }} source={icons.fire} />
                            <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>{item.calories.toFixed(2)} cal</Text>
                        </View>
                    </View>
                ))
            }

        </Animated.ScrollView>
    )
}

const styles = StyleSheet.create({
    quantityWrapper: {
        position: "absolute",
        bottom: -20,
        width: SIZES.width,
        height: 50,
        justifyContent: "center",
        flexDirection: "row"
    },
    quantityButton: {
        width: 50,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25
    },
    quantityButtonPlus: {
        width: 50,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },
    quantityNumber: {
        backgroundColor: COLORS.white,
        width: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    nameWrapper: {
        width: SIZES.width,
        alignItems: "center",
        marginTop: 15,
        paddingHorizontal: SIZES.padding * 2
    }
})
