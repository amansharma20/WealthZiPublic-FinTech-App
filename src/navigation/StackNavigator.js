/* eslint-disable prettier/prettier */
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React, { useEffect, useMemo, useReducer } from 'react';
import Login from '../screens/auth/Login';
import Home from '../screens/home/Home';
import * as Keychain from 'react-native-keychain';
import OtpScreen from '../screens/auth/OtpScreen';
import Onboarding from '../screens/onboarding/Onboarding';
import BasicDetails from '../screens/auth/BasicDetails';
import BottomTabBarNavigator from './BottomTabBarNavigator';
import MyMutualFunds from '../screens/home/mutualFunds/MyMutualFunds';
import MutualFundDetails from '../screens/home/mutualFunds/MutualFundDetails';
import Splash from '../screens/Splash';
import Profile from '../assets/svgs/Profile';
import AllMutualFunds from '../screens/explore/AllMutualFunds';
import FundDetails from '../screens/home/mutualFunds/FundDetails';
import OneTimePayment from '../screens/explore/transcation/OneTimePayment';
import SIPPayment from '../screens/explore/transcation/SIPPayment';
import Withdraw from '../screens/home/mutualFunds/transcations/Withdraw';
import SWP from '../screens/home/mutualFunds/transcations/SWP/SWP';
import SwitchToOtherFunds from '../screens/home/mutualFunds/transcations/SwitchFunds/SwitchToOtherFunds';
import SWPDetails from '../screens/home/mutualFunds/transcations/SWP/SWPDetails';
import SWPSuccess from '../screens/home/mutualFunds/transcations/SWP/SWPSuccess';
import SWPFail from '../screens/home/mutualFunds/transcations/SWP/SWPFail';
import SearchSwitchToFund from '../screens/home/mutualFunds/transcations/SwitchFunds/SearchSwitchToFund';
import ConfirmSwitchToOtherFund from '../screens/home/mutualFunds/transcations/SwitchFunds/ConfirmSwitchToOtherFund';
import SwitchFail from '../screens/home/mutualFunds/transcations/SwitchFunds/SwitchFail';
import STP from '../screens/home/mutualFunds/transcations/STP/STP';
import SearchSTPFund from '../screens/home/mutualFunds/transcations/STP/SearchSTPFund';
import ConfirmSTP from '../screens/home/mutualFunds/transcations/STP/ConfirmSTP';
import STPSuccess from '../screens/home/mutualFunds/transcations/STP/STPSuccess';
import STPFail from '../screens/home/mutualFunds/transcations/STP/STPFail';
import PersonalDetails from '../screens/profile/PersonalDetails';
import BankDetails from '../screens/profile/BankDetails';
import BankDetailsFull from '../screens/profile/BankDetailsFull';
import PanDetails from '../screens/kyc/PanDetails';
import KycDetails from '../screens/kyc/KycDetails';
import PrimaryDetails from '../screens/kyc/PrimaryDetails';
import AddressAndCorrespondence from '../screens/kyc/AddressAndCorrespondence';
import BankDetailsKYC from '../screens/kyc/BankDetailsKYC';
import NominationDetails from '../screens/kyc/NominationDetails';
import CartScreen from '../screens/cart/CartScreen';
import OneTimeCheckout from '../screens/checkout/oneTime/OneTimeCheckout';

const Stack = createStackNavigator();
export const AuthContext = React.createContext()

export default function StackNavigator() {

    const [state, dispatch] = useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    useEffect(() => {

        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await Keychain.getGenericPassword();
            } catch (e) {
                // Restoring token failed
            }

            userToken === false ? dispatch({ type: 'RESTORE_TOKEN', token: null }) : dispatch({ type: 'RESTORE_TOKEN', token: userToken })
        };

        bootstrapAsync();
    }, []);

    const authContext = useMemo(
        () => ({
            signIn: async data => {
                await Keychain.setGenericPassword("email", data);
                dispatch({ type: 'SIGN_IN', token: data });
            },
            signOut: async () => {
                await Keychain.resetGenericPassword();
                dispatch({ type: 'SIGN_OUT' })
            }
        }),
        []
    );

    if (state.isLoading) {
        // We haven't finished checking for the token yet
        return <Splash />;
    }

    return (
        <AuthContext.Provider value={authContext}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    keyboardHidesTabBar: true,
                }}>
                    {console.log(state)}
                {state.userToken == null ? (
                    <>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="OtpScreen" component={OtpScreen} />
                        <Stack.Screen name="BasicDetails" component={BasicDetails} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="BottomTabBarNavigator" component={BottomTabBarNavigator} />
                        <Stack.Screen name="SIPPayment" component={SIPPayment} />
                        <Stack.Screen name="OneTimeCheckout" component={OneTimeCheckout} />
                        <Stack.Screen name="PanDetails" component={PanDetails} />
                        <Stack.Screen name="BankDetailsFull" component={BankDetailsFull} /> 
                        <Stack.Screen name="BankDetails" component={BankDetails} />
                        <Stack.Screen name="MyMutualFunds" component={MyMutualFunds} />
                        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
                        <Stack.Screen name="MutualFundDetails" component={MutualFundDetails} />
                        <Stack.Screen name="Onboarding" component={Onboarding} />
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="AllMutualFunds" component={AllMutualFunds} />
                        <Stack.Screen name="FundDetails" component={FundDetails} />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name="OneTimePayment" component={OneTimePayment} />
                        <Stack.Screen name="Withdraw" component={Withdraw} />
                        <Stack.Screen name="SWP" component={SWP} />
                        <Stack.Screen name="SWPFail" component={SWPFail} />
                        <Stack.Screen name="SWPSuccess" component={SWPSuccess} />
                        <Stack.Screen name="SWPDetails" component={SWPDetails} />
                        <Stack.Screen name="SwitchFail" component={SwitchFail} />
                        <Stack.Screen name="SwitchToOtherFunds" component={SwitchToOtherFunds} />
                        <Stack.Screen name="ConfirmSwitchToOtherFund" component={ConfirmSwitchToOtherFund} />
                        <Stack.Screen name="SearchSwitchToFund" component={SearchSwitchToFund} />
                        <Stack.Screen name="SearchSTPFund" component={SearchSTPFund} />
                        <Stack.Screen name="ConfirmSTP" component={ConfirmSTP} />
                        <Stack.Screen name="STP" component={STP} />
                        <Stack.Screen name="STPSuccess" component={STPSuccess} />
                        <Stack.Screen name="KycDetails" component={KycDetails} />
                        <Stack.Screen name="PrimaryDetails" component={PrimaryDetails} />
                        <Stack.Screen name="AddressAndCorrespondence" component={AddressAndCorrespondence} />
                        <Stack.Screen name="BankDetailsKYC" component={BankDetailsKYC} />
                        <Stack.Screen name="NominationDetails" component={NominationDetails} />
                        <Stack.Screen name="STPFail" component={STPFail} />
                        <Stack.Screen name="CartScreen" component={CartScreen} />

                        
                    </>

                )}
            </Stack.Navigator>
        </AuthContext.Provider>
    );
}