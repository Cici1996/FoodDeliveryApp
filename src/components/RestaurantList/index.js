import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SIZES } from '../../../constants'
import { initialCurrentLocation } from '../../Dummy'
import RenderItem from './RenderItem'

export default function RestauranList({data,navigation}) {

    const [currentLocation, setcurrentLocation] = useState(initialCurrentLocation);

    const onPressRestaurant = (item) => {
        navigation.navigate("Restaurant",{
            item,
            currentLocation
        })
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => `${item.id}`}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
                <RenderItem item={item} onPress={() => onPressRestaurant(item)}/>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:SIZES.padding * 2,
        paddingBottom:320,
    }
})
