import { Platform } from 'react-native';

export const Color = {
    button : '#023373',
    blue: '#023373',
    texfieldTextColor: '#000000',
    secondaryText: '#9FA5C0',
    normalButton : '#F3F6F8',
    facebook : '#0002FC',
    productBg : '#F3F6F8',
    selectedBg : '#fffcf8',
    appColor: '#1BB18B',
    black :'#00000',
    background: '#ffffff',
    smallTitleColor: '#858585'
}

export const Fonts = {
    primary : Platform.select({
        ios: '',
        android:''
    })
}

export const AsyncStorageConstant = {
    isFirstLaunch : 'isFirstLaunch'
}

export const Padding = {
    left: 20,
    right :20,
    horizontal : 20,
    vertical : 20,
}

export const Margin = {
    left: 20,
    right :20,
    horizontal : 20,
    vertical : 20,
    top: 20
}