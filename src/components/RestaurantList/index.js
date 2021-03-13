import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SIZES } from '../../../constants'
import RenderItem from './RenderItem'

export default function RestauranList({data}) {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => `${item.id}`}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
                <RenderItem item={item}/>
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
