import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const ProfileScreen = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('http://10.10.100.183:8089/customer/');
            const data = await response.data;
            setUser(data);
            setId(data.id)
            setName(data.name)
            setPhone(data.phone);
            setEmail(data.email);
            // console.log('heheh', data.name);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const updateUser = async () => {
        try {
            const response = await axios.put('http://10.10.100.183:8089/customer/', {
                id,
                name,
                phone,
                email,
            });
            const data = response.data;
            setUser(data);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Phone:</Text>
            <TextInput style={styles.input} value={phone} onChangeText={setPhone} />

            <Text style={styles.label}>Email:</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} />

            <Button title="Update" onPress={updateUser} />

            <View style={styles.profileContainer}>
                <Text style={styles.profileLabel}>User Profile:</Text>
                <Text style={styles.profileText}>Name: {user.name}</Text>
                <Text style={styles.profileText}>Phone: {user.phone}</Text>
                <Text style={styles.profileText}>Email: {user.email}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    profileContainer: {
        marginTop: 16,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 16,
    },
    profileLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    profileText: {
        fontSize: 16,
        marginBottom: 4,
    },
});

export default ProfileScreen;
