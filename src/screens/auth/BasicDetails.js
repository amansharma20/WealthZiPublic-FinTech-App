/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';
import CommonButton from '../../components/CommonButton';
import FastImage from 'react-native-fast-image';
import { Color } from '../../utils/constants/Theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

export default function BasicDetails() {


    const dispatch = useDispatch();
    const navigation = useNavigation();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required()
    });

    const login = data => {

        const userData = {
            "user_id": data.email,
            "field_type": "email"
        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <FastImage
                    style={styles.logo}
                    source={uri = require("../../assets/images/logo.png")}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
            <View style={styles.textInputContainer}>

                <Formik
                    validationSchema={schema}
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        dateOfBirth: '',
                        mobile: '',
                    }}
                    onSubmit={values => login(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <>
                            <View style={styles.textContainer}>
                                <Text style={styles.subtitle}>Please enter basic details</Text>
                                <View style={styles.textInputViewWithShadow}>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.firstName}
                                        placeholder="First Name"
                                        placeholderTextColor="#B4B4B4"
                                    />

                                </View>
                                {errors.firstName && touched.firstName && (
                                    <Text style={styles.error}>First Name is Required.</Text>
                                )}

                                <View style={styles.textInputViewWithShadow}>
                                    <TextInput
                                        name='lastName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('lastName')}
                                        onBlur={handleBlur('lastName')}
                                        value={values.lastName}
                                        placeholder="Last Name"
                                        placeholderTextColor="#B4B4B4"
                                    />

                                </View>
                                {errors.lastName && touched.lastName && (
                                    <Text style={styles.error}>Last Name is Required.</Text>
                                )}

                                <View style={styles.textInputViewWithShadow}>
                                    <TextInput
                                        name='dateOfBirth'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('dateOfBirth')}
                                        onBlur={handleBlur('dateOfBirth')}
                                        value={values.dateOfBirth}
                                        placeholder="Date Of Birth"
                                        placeholderTextColor="#B4B4B4"
                                    />

                                </View>
                                {errors.dateOfBirth && touched.dateOfBirth && (
                                    <Text style={styles.error}>Date of Birth is Required.</Text>
                                )}

                                <View style={styles.textInputViewWithShadow}>
                                    <TextInput
                                        name='mobile'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('mobile')}
                                        onBlur={handleBlur('mobile')}
                                        value={values.mobile}
                                        placeholder="Mobile"
                                        placeholderTextColor="#B4B4B4"
                                    />

                                </View>
                                {errors.mobile && touched.mobile && (
                                    <Text style={styles.error}>Mobile is Required.</Text>
                                )}

                            </View>
                            <View style={styles.buttonContainer}>
                                <CommonButton label={'Continue'}
                                    onPress={handleSubmit}
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputContainer: {
        flex: 3,
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    logo: {
        width: "50%",
        height: "50%",
    },
    subtitle: {
        color: Color.secondaryText,
        fontSize: 18,
        fontWeight: '400'
    },
    textContainer: {
        flex: 3,
        alignItems: 'center',
    },
    textInputStyle: {
        height: 60,
        borderRadius: 10,
        fontSize: 17,
        paddingLeft: 10,
        color: '#A7A7A7'
    },
    textInputViewWithShadow: {
        borderRadius: 10,
        backgroundColor: '#fff',
        width: '90%',
        shadowColor: '#333333',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            height: 2,
            width: 4
        },
        elevation: 1,
        marginTop: 30
    }, error: {
        marginLeft: 10,
        color: '#cc0000',
        width: '90%',
        marginTop: 10
    },
})




