import React from 'react'
import { Image,StyleSheet } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import { Home } from '../screens'
import { COLORS, icons } from '../../constants';
import {TabBarCostumButton} from '../components';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    tabNavigator : {
        backgroundColor:COLORS.transtparent,
        borderTopWidth:0,
        elevation:0,
    }
})

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:styles.tabNavigator
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={icons.cutlery}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor : focused ? COLORS.primary:COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton:(props) => (
                        <TabBarCostumButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor : focused ? COLORS.primary:COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton:(props) => (
                        <TabBarCostumButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="Love"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={icons.love}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor : focused ? COLORS.primary:COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton:(props) => (
                        <TabBarCostumButton {...props} />
                    )
                }}
            />
            <Tab.Screen
                name="User"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor : focused ? COLORS.primary:COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton:(props) => (
                        <TabBarCostumButton {...props} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
