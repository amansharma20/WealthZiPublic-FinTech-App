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
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useNavigation } from '@react-navigation/core';
import { commanStyles } from '../../assets/styles';

export default function Login() {

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
    dispatch(AuthActions.signIn('user/send_otp', userData)).then(response => {
      if (response.status === 200) {
        navigation.navigate('OtpScreen', {
          email: data.email
        })
      }
    })
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
            email: '',
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
                <Text style={styles.welcome}>Welcome!</Text>
                <Text style={styles.subtitle}>Please Enter Your Email ID</Text>
                <View style={[styles.textInputViewWithShadow,commanStyles.appShadow]}>
                  <TextInput
                    name='email'
                    style={styles.textInputStyle}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                    keyboardType='email-address'
                    placeholderTextColor="#B4B4B4"
                  />

                </View>
                {errors.email && touched.email && (
                  <Text style={styles.error}>Email is Required.</Text>
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
  welcome: {
    fontSize: 28,
    fontWeight: '700',
    color: Color.blue
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
    marginTop: 50
  }, error: {
    marginLeft: 10,
    color: '#cc0000',
    width: '90%',
    marginTop: 10
  },
})




