import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from "@react-navigation/elements";

const ListeningScreen: React.FC = () => {
    const headerHeight = useHeaderHeight();

    return (
        <SafeAreaView style={[styles.container, { paddingTop: headerHeight + 30 }]}>

            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity style={styles.closeButton}>
                    <Ionicons name="close" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.progressBar} />
                <Ionicons name="heart" size={24} color="red" style={styles.heartIcon} />
            </View>

            <Text style={styles.question}>O que você ouve?</Text>

            <TouchableOpacity style={styles.soundButton}>
                <Ionicons name="volume-high" size={32} color="white" />
            </TouchableOpacity>

            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Gato</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Chato</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Pato</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionText}>Nato</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.listenButton}>
                    <Text style={styles.listenText}>NÃO POSSO OUVIR AGORA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkButton}>
                    <Text style={styles.checkText}>VERIFICAR</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    header: {
        paddingTop: 20,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    closeButton: {
        padding: 8,
    },
    progressBar: {
        flex: 1,
        height: 15,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#FFD700',
    },
    heartIcon: {
        marginRight: 8,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    soundButton: {
        width: 70,
        height: 70,
        marginBottom: 30,
        borderRadius: 15,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E90FF',
    },
    optionsContainer: {
        marginBottom: 30,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    optionButton: {
        width: '48%',
        height: 180,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingVertical: 20,
        alignItems: 'center',
        borderColor: '#ddd',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
    },
    optionText: {
        fontSize: 25,
        color: '#333',
        fontWeight: '900',
    },
    bottomButtons: {
        marginBottom: 10,
        marginTop: "auto",
        alignItems: 'center',
    },
    listenButton: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: '100%',
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 10,
    },
    listenText: {
        fontSize: 14,
        color: '#999',
    },
    checkButton: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: '100%',
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        borderRadius: 8,
    },
    checkText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default ListeningScreen;
