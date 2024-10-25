import {
    View,
    Text,
    Image,
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React from 'react';

import { assets } from '~/assets';

export const HomeScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.unitTitle}>Unidade 1</Text>
                    <Text
                        numberOfLines={1}
                        style={styles.unitDescription}
                    >
                        Use frases básicas, cumprimente as pessoas
                    </Text>
                </View>

                <Pressable
                    onPress={() => Alert.alert("Abrir Tarefas", "Abrir lista de tarefas a fazer!")}>
                    <Image
                        style={styles.iconHeader}
                        source={assets.image.button}
                    />
                </Pressable>
            </View>

            <View style={styles.mainContent}>
                <TouchableOpacity style={styles.circleButton}>
                    <Image
                        source={assets.image.start}
                        style={[styles.icon]}
                    />
                </TouchableOpacity>

                <View style={styles.lockedButtonContainer}>
                    <Image
                        source={assets.image.lock}
                        style={[styles.icon, { tintColor: '#CCCCCC' }]}
                    />
                </View>

                <Pressable
                    style={styles.lockedPressableContainer}
                    onPress={() => Alert.alert("Abrir Bau", "Abrir Bau de prêmios!")}
                >
                    <Image
                        source={assets.image.bau}
                    />
                </Pressable>

                <View style={styles.lockedButtonContainer}>
                    <Image
                        source={assets.image.book}
                        style={[styles.icon, { tintColor: '#CCCCCC' }]}
                    />
                </View>

                <View style={styles.lockedButtonContainer}>
                    <Image
                        source={assets.image.trofeu}
                        style={[styles.icon, { tintColor: '#CCCCCC' }]}
                    />
                </View>

                <View style={styles.owlContent}>
                    <Image
                        source={assets.image.logo}
                        style={styles.owlIcon}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        paddingTop: 40,
        paddingLeft: 20,
        paddingBottom: 15,
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#58CC02',
        justifyContent: 'space-between',
    },
    iconHeader: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginRight: 15,
    },
    unitTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    unitDescription: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
    },
    mainContent: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },
    circleButton: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#58CC02',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    startText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    lockedButtonContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    lockedPressableContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 50,
        height: 50,
        tintColor: '#FFFFFF',
    },
    owlContent: {
        position: 'absolute',
        bottom: 150,
        right: 0,
    },
    owlIcon: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});
