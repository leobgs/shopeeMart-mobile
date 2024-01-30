import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {

    const [nameProfile, setNameProfile] = useState();

    useEffect(() => {
        AsyncStorage.getItem('username').then((value) => {
            setNameProfile(value);
            console.log(nameProfile);
        });
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.title}>ShopeeMart</Text>

                <View style={styles.profile}>
                    <Text>{nameProfile}</Text>
                </View>
            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 20,
        paddingBottom: 10,
    },
    header: {
        display: 'flex',
        backgroundColor: 'blue',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    profile: {
        display: 'flex',
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        borderRadius: 50,

    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 10,
    },
});

export default Header;
