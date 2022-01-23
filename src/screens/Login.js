import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/utils/AppButton'
import AppInput from '../components/utils/AppInput'
import AppScreen from '../components/utils/AppScreen';
import AppText from '../components/utils/AppText';

import { REGISTER } from '../constants/routes';
import { loginSchema } from '../constants/schema';

const LoginScreen = () => {
    const navigation = useNavigation()
    return (
        <AppScreen style={{ position: "relative" }}>
            <Image
                source={require('../assets/images/logo.png')}
                width={200}
                height={200}
                style={styles.logo}
            />
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={loginSchema}
            >
                {({values,errors,handleChange,handleSubmit}) => (
                    
                    <View>

                        <AppInput
                            label='Email'
                            icon={<Text>Email</Text>}
                            error={errors.email}
                            value={values.email}
                            onChangeText={handleChange('email')}
                        />
                        <AppInput
                            label='Password'
                            icon={<Text>Password</Text>}
                            error={errors.password}
                            value={values.password}
                            onChangeText={handleChange('password')}
                        />
                        <AppButton onPress={handleSubmit} title="Login" />
                    </View>
                )}
            </Formik>
            <View style={styles.signUpContainer}>
                <AppText title="Don't have an account ?" size='small' />
                <TouchableOpacity onPress={() => navigation.navigate(REGISTER)}>
                    <AppText title="Sign Up" size='medium' />
                </TouchableOpacity>
            </View>
        </AppScreen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo: {
        alignSelf: "center",
        marginTop: 10,
    },
    signUpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    }

})
