import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { COLORS, icons } from '../../constants'
import { HeaderComponent, RestauranList } from '../components'
import MainCategories from '../components/MainCategories'
import { categoryData, initialCurrentLocation, restaurantData } from '../Dummy'

export default function Home({navigation}) {
    const [currentLocation, setcurrentLocation] = useState(initialCurrentLocation)
    const [categories, setcategories] = useState(categoryData)
    const [restaurant, setrestaurant] = useState(restaurantData);

    const callback = (data) => {
        let restaurantList = restaurantData.filter(a => a.categories.includes(data?.id));
        setrestaurant(restaurantList);
    }


    return (
        <SafeAreaView style={styles.cotainer}>
            <HeaderComponent currentLocation={currentLocation.streetName} />
            <MainCategories data={categories} parentCallback={callback} />
            <RestauranList data={restaurant} navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray4,
        flex: 1
    }
})
