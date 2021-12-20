import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OneTime from '../screens/cart/OneTime';
import SIP from '../screens/cart/SIP';

const Tab = createMaterialTopTabNavigator();

export default function MyCartTopTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#1BB18B',
                tabBarLabelStyle: { fontSize: 12 },
            }}>
            <Tab.Screen name="OneTime" component={OneTime} />
            <Tab.Screen name="Sip" component={SIP} />
        </Tab.Navigator>
    );
}