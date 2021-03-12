import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { COLORS, icons } from '../../constants'
import { HeaderComponent } from '../components'
import MainCategories from '../components/MainCategories'
import { categoryData, initialCurrentLocation } from '../Dummy'

export default function Home() {
    const [currentLocation, setcurrentLocation] = useState(initialCurrentLocation)
    const [categories, setcategories] = useState(categoryData)

    return (
        <SafeAreaView style={styles.cotainer}>
            <HeaderComponent currentLocation={currentLocation.streetName} />
            <MainCategories data={categories} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray4,
        flex: 1
    }
})
