import Toast from 'react-native-toast-message';

export const MessageBox = {
    error: (message) => {
        return Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Try Again.',
            text2: message,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    },
    success: (message) => {
        return Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Success',
            text2: message,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    },
};
