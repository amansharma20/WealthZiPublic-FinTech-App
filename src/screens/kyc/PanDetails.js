/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../constants';
import { commanStyles } from '../../assets/styles';
import { Color } from '../../utils/constants/Theme';
import { Formik } from 'formik';
import * as yup from 'yup';
import CommonButton from '../../components/CommonButton';

export default function PanDetails() {
    const navigation = useNavigation();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required()
    });

    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Image source={icons.wealthZiIcon} style={{ width: 175, height: 50, alignSelf: 'center', resizeMode: 'contain', marginTop: 50 }} />
                <Text style={[commanStyles.headerText, { alignSelf: 'center', marginVertical: 50 }]}>
                    PAN details
                </Text>
                <View style={{ paddingHorizontal: 24, flex: 1,  }}>
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            panCard: '',
                        }}
                    // onSubmit={console.log(values)}
                    style={{flex: 1}}
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
                                <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 40 }}>
                                    <View>
                                        <Text style={commanStyles.normalText}>PAN Card Number*</Text>
                                        <View>
                                            <TextInput
                                                name='firstName'
                                                style={styles.textInputStyle}
                                                onChangeText={handleChange('firstName')}
                                                onBlur={handleBlur('firstName')}
                                                value={values.panCard}
                                                placeholder="First Name"
                                                placeholderTextColor="#B4B4B4"
                                            />

                                        </View>
                                        {errors.panCard && touched.panCard && (
                                            <Text style={styles.error}>Pan Card is Required.</Text>
                                        )}
                                    </View>
                                        <CommonButton label={'Save & Continue'} onPress={handleSubmit}
                                        onPress={() => navigation.navigate('KycDetails')} />
                                </View> 

                            </>
                        )}
                    </Formik>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    textInputStyle: {
        height: 56,
        borderRadius: 15,
        fontSize: 16,
        paddingLeft: 10,
        color: '#A7A7A7',
        backgroundColor: 'white',
        elevation: 8
    },
    error: {
        marginLeft: 10,
        color: '#cc0000',
        width: '90%',
        marginTop: 10
    },
});
