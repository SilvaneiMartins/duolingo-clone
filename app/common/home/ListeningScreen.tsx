import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from "@react-navigation/elements";

const ListeningScreen: React.FC = () => {
    const router = useRouter();
    const headerHeight = useHeaderHeight();

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const correctAnswer = 'Gato';

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const isCorrectSelected = selectedOption === correctAnswer;

    const onLessonQuestions = () => {
        router.navigate('/common/home/SequenceQuestions');
    };

    return (
        <SafeAreaView style={[styles.container, { paddingTop: headerHeight + 30 }]}>

            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => router.back()}
                >
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
                {['Gato', 'Chat', 'Pato', 'Nada'].map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={[
                            styles.optionButton,
                            selectedOption === option && styles.selectedOption,
                        ]}
                        onPress={() => handleOptionSelect(option)}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.listenButton}>
                    <Text style={styles.listenText}>NÃO POSSO OUVIR AGORA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.checkButton,
                        isCorrectSelected ? styles.checkButtonActive : styles.checkButtonDisabled
                    ]}
                    disabled={!isCorrectSelected}
                    onPress={onLessonQuestions}
                >
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
    checkButtonActive: {
        backgroundColor: '#32CD32',
    },
    checkButtonDisabled: {
        backgroundColor: '#D3D3D3',
    },
    selectedOption: {
        borderColor: '#1E90FF',
        borderWidth: 2,
    },
});

export default ListeningScreen;
