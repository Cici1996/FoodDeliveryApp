import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { FONTS, SIZES } from '../../../constants'
import RenderItem from './renderItem'



export default function MainCategories({ data }) {
    const [selectedCategory, setselectedCategory] = useState(null);

    function onSelecCategory(item) {
        setselectedCategory(item);
    }

    return (
        <View style={styles.container}>
            <Text style={{ ...FONTS.h1 }}>Main</Text>
            <Text style={{ ...FONTS.h1 }}>Categories</Text>

            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => (
                    <RenderItem selectedCategory={selectedCategory} item={item} onPress={() => onSelecCategory(item)} />
                )}
                contentContainerStyle={styles.listContainer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: SIZES.padding * 2
    },
    listContainer: {
        paddingVertical: SIZES.padding * 2
    }
})
