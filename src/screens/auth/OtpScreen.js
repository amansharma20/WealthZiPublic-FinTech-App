/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import FastImage from 'react-native-fast-image';
import CommonButton from '../../components/CommonButton';
import { Color } from '../../utils/constants/Theme';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { MessageBox } from '../../components/MessageBox';
import { AuthActions } from '../../persistence/actions/AuthActions';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../navigation/StackNavigator';


export default function OtpScreen(props) {

    const { signIn } = useContext(AuthContext);
    const { email } = props.route.params;
    const dispatch = useDispatch();
    const [otp, setOtp] = useState('');

    const [otpTimer, setOtpTimer] = useState(60);

    useEffect(() => {
        let interval = setInterval(() => {
            setOtpTimer(oldValue => {
                oldValue <= 1 && clearInterval(interval)
                return oldValue - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const onSubmit = () => {
        if (otp.length != 6) {
            MessageBox.error('Please enter Otp.');
        } else {
            const userData = {
                "user_id": email,
                "field_type": "email",
                "otp": otp
            }
            dispatch(AuthActions.signIn('user/verify_otp', userData)).then(response => {
                if (response.status === 200) {
                    var token = 'Bearer ' + response.data.access_token
                    signIn(token);
                }
            })
        }
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <FastImage
                        style={styles.logo}
                        source={uri = require("../../assets/images/logo.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
                <View style={styles.textInputContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.welcome}>OTP</Text>
                        <Text style={styles.subtitle}>An OTP has been sent to your Email ID {email}</Text>
                        <OTPInputView
                            style={styles.otpView}
                            pinCount={6}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                setOtp(code)
                            })}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                            <Text>Resend Otp </Text>
                            {otpTimer >= 0 && <Text>{otpTimer}</Text>}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text>Entered Wrong Email Id? </Text>
                            <Text>Edit</Text>
                        </View>
                        <CommonButton label={'Continue'} style={{ marginTop: 10 }} onPress={onSubmit} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        flex: 3,
        alignItems: 'center',
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
        fontWeight: '400',
        textAlign: 'center'
    },
    otpView: {
        width: '90%',
        height: '30%',
    },
    underlineStyleBase: {
        width: 50,
        height: 50,
        borderRadius: 4,
        backgroundColor: '#fff',
        shadowColor: '#333333',
        shadowOpacity: 0.10,
        shadowRadius: 5,
        shadowOffset: {
            height: 3,
            width: 3
        },
        borderWidth: 0,
        elevation: 1,
        color: Color.texfieldTextColor
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },
})




