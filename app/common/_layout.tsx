import { Stack } from 'expo-router';

export default function CommonLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
    );
}
