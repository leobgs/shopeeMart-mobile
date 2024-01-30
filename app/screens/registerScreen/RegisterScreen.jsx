import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import RegisterSchema from '../../validator/RegisterValidator';
import { register } from '../../services/AuthService';

const RegisterScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    fullName: '',
                    address: '',
                    mobilePhone: ''
                }}
                validationSchema={RegisterSchema}
                onSubmit={(values, { setSubmitting }) => {
                    register(values)
                        .then(response => {
                            console.log(response.data);
                            setSubmitting(false);
                            navigation.navigate(<LoginForm />);
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
                            placeholder="username"
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
                            placeholder="password"
                            secureTextEntry
                        />
                        {errors.password && touched.password ? (
                            <Text style={styles.error}>{errors.password}</Text>
                        ) : null}

                        <Text>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            placeholder="confirm password"
                            secureTextEntry
                        />
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <Text style={styles.error}>{errors.confirmPassword}</Text>
                        ) : null}

                        <Text>Email</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="email"
                        />
                        {errors.email && touched.email ? (
                            <Text style={styles.error}>{errors.email}</Text>
                        ) : null}

                        <Text>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                            placeholder="fullName"
                        />
                        {errors.fullName && touched.fullName ? (
                            <Text style={styles.error}>{errors.fullName}</Text>
                        ) : null}

                        <Text>Address</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('address')}
                            onBlur={handleBlur('address')}
                            value={values.address}
                            placeholder="address"
                        />
                        {errors.address && touched.address ? (
                            <Text style={styles.error}>{errors.address}</Text>
                        ) : null}

                        <Text>Mobile Phone</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('mobilePhone')}
                            onBlur={handleBlur('mobilePhone')}
                            value={values.mobilePhone}
                            placeholder="mobile phone"
                        />
                        {errors.mobilePhone && touched.mobilePhone ? (
                            <Text style={styles.error}>{errors.mobilePhone}</Text>
                        ) : null}
                        <Button style={styles.button} onPress={handleSubmit} title="Submit" />

                    </View>
                )}

            </Formik>
        </View >
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

export default RegisterScreen;