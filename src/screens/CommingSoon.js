import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, icons } from '../../constants'

export default function CommingSoon() {
    return (
        <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Image source={icons.rotcket} resizeMode="cover" style={{width:200,height:200,marginBottom:10}}/>
            <Text style={{...FONTS.h1,color:COLORS.primary}}>Hey Guy's</Text>
            <Text style={{...FONTS.h3,color:COLORS.primary}}>We're Comming Soon</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
