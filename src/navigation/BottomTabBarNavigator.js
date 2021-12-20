/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Responsive } from '../utils/layouts/Layout';
import HomeIcon from '../assets/svgs/Home.js';
import Profile from '../assets/svgs/Profile.js';
import HomeScreen from '../screens/home/Home';
import ProfileScreen from '../screens/profile/Profile';
import ExploreTab from '../screens/explore/ExploreTab';
import { Color } from '../utils/constants/Theme';
import Explore from '../assets/svgs/Explore';

function MyTabBar({ state, descriptors, navigation }) {

    const focusedOptions = descriptors[state.routes[state.index].key].options;
    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.menuContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;
                    const menuIcon = options.tabBarIcon(isFocused);
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[styles.menuItem, isFocused ? { backgroundColor: Color.appColor, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', alignContent: 'center' } : { justifyContent: 'center', alignItems: 'center', flexDirection: 'column', alignContent: 'center' }]}
                            key={route.key}
                        >
                            {menuIcon}
                            <Text style={{ color: isFocused ? '#4D2D8F' : '#9498AB', fontSize: 12, marginTop: 2, alignItems: 'center', alignContent: 'center', justifyContent: 'center' }}>
                                {label}
                            </Text>
                        </TouchableOpacity>

                    );
                })}
            </View>
        </View>
    );
}

const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

export default function BottomTabBarNavigator() {
    return (
        <Tab.Navigator
            activeColor= {Color.appColor}
            inactiveColor= {Color.blue}
            barStyle={{ backgroundColor: '#ffff' }}
            tabBar={props => <MyTabBar {...props} style={{ backgroundColor: Color.appColor }} />}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: (focused) => (
                    <HomeIcon focused={focused} />
                ),
                headerShown: false,
            }} />
            <Tab.Screen name="Explore" component={ExploreTab} options={{
                tabBarIcon: (focused) => (
                    <Explore focused={focused} />
                ),
                headerShown: false,
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: (focused) => (
                    <Profile focused={focused} />
                ),
                headerShown: false,
            }} />``
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        height: Platform.select({
            ios: Responsive.height(80),
            android: Responsive.height(60)
        }),
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#f6f6f6',
    },
    menuContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: Responsive.width(10),
        paddingRight: Responsive.width(10),
        height: Responsive.height(60),
        alignItems: 'center',
    },
    menuItem: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        height: Responsive.height(30),
        flexDirection: 'row',
        borderRadius: Responsive.width(30),
        paddingLeft: Responsive.width(8),
        paddingRight: Responsive.width(8),
    },
    menuIcon: {
        width: Responsive.width(35),
        height: Responsive.height(35),
    },
    cartContainer: {
        height: Responsive.height(56),
        width: Responsive.width(116),
        position: 'absolute',
        top: Responsive.height(0),
        right: 0,
    },
});
