import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/utils/AppButton';
import AppInput from '../components/utils/AppInput';
import AppScreen from '../components/utils/AppScreen';
import AppText from '../components/utils/AppText';
import { LOGIN } from '../constants/routes';
import { signUpSchema } from '../constants/schema';
import { signup } from '../api/signup';
import AppMessage from '../components/utils/AppMessage';
const SignUpScreen = () => {
    const navigation = useNavigation();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState();
    const onSignUp = async (values) => {
        setLoading(true)
        const response = await signup(values);
        if (response?.hasError) {
            setError(true);
            setLoading(false);
            setResponseMessage(response.data);
        } else {
            setError(false);
            setLoading(false);
            setResponseMessage(response.data);
            setInterval(() => {
                navigation.navigate(LOGIN)
            }, 1500)
        }
    }
    return (
        <AppScreen style={{ justifyContent: "center" }}>
            {responseMessage && <AppMessage title={responseMessage} type={error ? 'danger' : 'success'} icon={<Text>ICon</Text>} />}
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => onSignUp(values)}
                validationSchema={signUpSchema}
            >
                {({ values, errors, handleChange, handleSubmit }) => (

                    <View>

                        <AppInput
                            label='First Name'
                            icon={<Text>First Name</Text>}
                            error={false}
                            value={values.firstName}
                            error={errors.firstName}
                            onChangeText={handleChange('firstName')}
                        />
                        <AppInput
                            label='Last Name'
                            icon={<Text>Last Name</Text>}
                            error={false}
                            value={values.lastName}
                            error={errors.lastName}

                            onChangeText={handleChange('lastName')}
                        />
                        <AppInput
                            label='Email'
                            icon={<Text>Email</Text>}
                            error={false}
                            value={values.email}
                            error={errors.email}
                            onChangeText={handleChange('email')}
                        />
                        <AppInput
                            label='Password'
                            icon={<Text>Password</Text>}
                            error={false}
                            value={values.password}
                            error={errors.password}
                            onChangeText={handleChange('password')}
                        />
                        <AppButton title="Submit" loading={loading} onPress={handleSubmit} />
                    </View>
                )}
            </Formik>
            <View style={styles.backTologin}>
                <AppText title="Already have an account ? " size='small' />
                <TouchableOpacity onPress={() => navigation.navigate(LOGIN)}>
                    <AppText title="Login" />
                </TouchableOpacity>
            </View>
        </AppScreen>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    backTologin: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    }
})
