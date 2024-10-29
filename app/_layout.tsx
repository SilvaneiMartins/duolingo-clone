import { Stack } from 'expo-router';

export const unstable_settings = {
    // Certifique-se de que o recarregamento em `/modal` mantenha um botão Voltar presente.
    initialRouteName: '(tabs)',
};

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
            <Stack.Screen name="common" options={{ headerShown: false }} />
        </Stack>
    );
}
