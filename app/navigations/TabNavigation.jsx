import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import OrderScreen from "../screens/orderScreen/OrderScreen";
import Colors from "../utils/Colors";
import { Text } from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.PRIMARY,
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Home</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="home" size={27} color={color} />
                    )
                }}
            />

            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Profile</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="idcard" size={24} color="black" />)
                }} />

            <Tab.Screen name="Order" component={OrderScreen}
                options={{
                    tabBarLabel: ({ color }) => (
                        <Text style={{ color: color, fontSize: 12, marginTop: -7 }}>Booking</Text>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="shopping-cart" size={24} color="black" />
                    )
                }} />
        </Tab.Navigator>
    );
}
