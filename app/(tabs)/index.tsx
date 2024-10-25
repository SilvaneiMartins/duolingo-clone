import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { HomeScreen } from '~/features/Home';

export default function Home() {
    return (
        <>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.container}>
                <HomeScreen />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
