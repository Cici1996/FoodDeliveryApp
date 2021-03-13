import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { COLORS, icons } from '../../constants'
import { HeaderComponent, RestauranList } from '../components'
import MainCategories from '../components/MainCategories'
import { categoryData, initialCurrentLocation, restaurantData } from '../Dummy'

export default function Home() {
    const [currentLocation, setcurrentLocation] = useState(initialCurrentLocation)
    const [categories, setcategories] = useState(categoryData)
    const [restaurant, setrestaurant] = useState(restaurantData)

    return (
        <SafeAreaView style={styles.cotainer}>
            <HeaderComponent currentLocation={currentLocation.streetName} />
            <MainCategories data={categories} />
            <RestauranList data={restaurant}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray4,
        flex: 1
    }
})
