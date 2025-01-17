import React from 'react';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops, Algo Errado!' }} />
            <View style={styles.container}>
                <Text style={styles.title}>Esta tela não existe.</Text>
                <Link href="/" style={styles.link}>
                    <Text style={styles.linkText}>Ir para a tela inicial!</Text>
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        marginTop: 16,
        paddingVertical: 16,
    },
    linkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
