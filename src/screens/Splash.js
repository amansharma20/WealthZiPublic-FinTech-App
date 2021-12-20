/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
    View,
    StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { MutualFundsAction } from '../persistence/actions/MutualFundsAction';
import { ProfileAction } from '../persistence/actions/ProfileAction';

export default function Splash() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(MutualFundsAction.getPortfolioSummary('manual-investments/portfolio-summary'));
        dispatch(MutualFundsAction.getXirReport('reports/xirr-current'));
        dispatch(MutualFundsAction.getConsolidatedFunds('reports/consolidated'));
        dispatch(MutualFundsAction.getAllMutualFunds('mutual-funds/funds-list', {}));
        dispatch(MutualFundsAction.getNFOList('mutual-funds/nfo-list',{}));
        dispatch(ProfileAction.getProfile('user'));
    },[])

    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})




