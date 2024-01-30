import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
});

const LoginForm = () => {
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                    axios.post('http://10.10.100.236:8089/auth/login', values)
                        .then(response => {
                            console.log(response.data);
                            setSubmitting(false);
                        })
                        .catch(error => {
                            console.log(error);
                            setSubmitting(false);
                        });
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <Text>Username</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            placeholder="Username"
                        />
                        {errors.username && touched.username ? (
                            <Text style={styles.error}>{errors.username}</Text>
                        ) : null}

                        <Text>Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="Password"
                            secureTextEntry
                        />
                        {errors.password && touched.password ? (
                            <Text style={styles.error}>{errors.password}</Text>
                        ) : null}

                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
    },
    error: {
        color: 'red',
        marginBottom: 10,
    },
});

export default LoginForm;