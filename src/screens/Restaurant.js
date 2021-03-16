import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../../constants';
import { FoodInfo, OrderButton } from '../components';
import HeaderBackButton from '../components/Header/HeaderBackButton';

export default function Restaurant({ route, navigation }) {

    const [restaurant, setrestaurant] = useState(null);
    const [currentLocation, setcurrentLocation] = useState(null);
    const [currentItemInChart, setcurrentItemInChart] = useState([])
    const [currentItemNumber, setcurrentItemNumber] = useState(0)
    const [totalOrder, settotalOrder] = useState(0)

    useEffect(() => {
        let { item, currentLocation } = route.params;
        setrestaurant(item);
        setcurrentLocation(currentLocation);
        getBasketItemCount();
    }, [currentItemInChart])

    const callbackCurrentItem = (item) => {
        setcurrentItemInChart(item);
    }

    const getBasketItemCount = () => {
        let itemCount = currentItemInChart.reduce((a, b) => a + (b.qty || 0), 0);
        setcurrentItemNumber(itemCount);

        let total = currentItemInChart.reduce((a, b) => a + (b.total || 0), 0);
        settotalOrder(total.toFixed(2));
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderBackButton restaurant={restaurant} onPressBack={() => { navigation.goBack() }} />
            <FoodInfo data={restaurant} currentItemInChart={callbackCurrentItem} />
            <OrderButton currentItem={currentItemNumber} totalOrder={totalOrder} onPress={() => navigation.navigate("OrderDelivery")} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray2,
        flex: 1
    }
})
