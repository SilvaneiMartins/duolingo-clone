import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useHeaderHeight } from "@react-navigation/elements";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const options = [
    { id: 1, label: 'Oportunidade de Emprego', icon: 'bar-chart' },
    { id: 2, label: 'Cultura', icon: 'color-palette' },
    { id: 3, label: 'Treinamento Cerebral', icon: 'happy' },
    { id: 4, label: 'Família e Amigos', icon: 'people' },
    { id: 5, label: 'Viagem', icon: 'airplane' },
    { id: 6, label: 'Escola', icon: 'book' },
    { id: 7, label: 'Outros', icon: 'planet' },
];

const LanguageLearningScreen: React.FC = () => {
    const router = useRouter();
    const headerHeight = useHeaderHeight();

    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const handleOptionSelect = (id: number) => {
        setSelectedOption(id);
    };

    return (
        <SafeAreaView style={[styles.container, { paddingTop: headerHeight + 30 }]}>
            <Stack.Screen options={{ headerShown: false }} />

            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={styles.progressBar} />
            </View>

            {/* Title */}
            <Text style={styles.title}>Por que você está aprendendo um idioma?</Text>

            {/* Options List */}
            <View style={styles.optionsContainer}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option.id}
                        style={[
                            styles.optionButton,
                            selectedOption === option.id && styles.optionButtonSelected,
                        ]}
                        onPress={() => handleOptionSelect(option.id)}
                    >
                        <Ionicons
                            name={option.icon}
                            size={24}
                            color={selectedOption === option.id ? '#58CC02' : '#333'}
                        />
                        <Text style={styles.optionText}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Continue Button */}
            <TouchableOpacity
                style={[styles.continueButton, selectedOption !== null ? styles.continueButtonActive : styles.continueButtonDisabled]}
                disabled={selectedOption === null}
            >
                <Text style={styles.continueText}>CONTINUE</Text>
            </TouchableOpacity>
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
        justifyContent: 'flex-start',
    },
    backButton: {
        padding: 8,
    },
    progressBar: {
        flex: 1,
        height: 15,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#FFD700',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    optionsContainer: {
        marginVertical: 10,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        paddingBottom: 20,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionButtonSelected: {
        backgroundColor: '#F0F8E0',
    },
    optionText: {
        fontSize: 18,
        color: '#333',
        marginLeft: 10,
    },
    continueButton: {
        marginTop: 20,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    continueButtonDisabled: {
        backgroundColor: '#D3D3D3',
    },
    continueButtonActive: {
        backgroundColor: '#58CC02',
    },
    continueText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default LanguageLearningScreen;
