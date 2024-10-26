import { Link, Tabs } from 'expo-router';
import { Image, View } from 'react-native';

import { assets } from '~/assets';

import { TabBarIcon } from '../../components/TabBarIcon';
import { HeaderButton } from '../../components/HeaderButton';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'black',
                tabBarStyle: {
                    height: 70,
                    borderTopWidth: 0,
                    borderColor: 'transparent',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Duolingo',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 45,
                                height: 45,
                                padding: 20,
                                borderWidth: 2,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: focused ? '#A0D2EC' : 'white',
                                backgroundColor: focused ? '#E2F2FD' : 'white',
                            }}
                        >
                            <Image
                                source={assets.tabbar.home}
                                style={{ width: 35, height: 35 }}
                            />
                        </View>
                    ),
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <HeaderButton />
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 45,
                                height: 45,
                                padding: 20,
                                borderWidth: 2,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: focused ? '#A0D2EC' : 'white',
                                backgroundColor: focused ? '#E2F2FD' : 'white',
                            }}
                        >
                            <Image
                                source={assets.tabbar.dumbbell}
                                style={{ width: 35, height: 35 }}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="treasure"
                options={{
                    title: 'Prêmios',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 45,
                                height: 45,
                                padding: 20,
                                borderWidth: 2,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: focused ? '#A0D2EC' : 'white',
                                backgroundColor: focused ? '#E2F2FD' : 'white',
                            }}
                        >
                            <Image
                                source={assets.tabbar.treasure}
                                style={{ width: 35, height: 35 }}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="shield"
                options={{
                    title: 'Escudos',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 45,
                                height: 45,
                                padding: 20,
                                borderWidth: 2,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: focused ? '#A0D2EC' : 'white',
                                backgroundColor: focused ? '#E2F2FD' : 'white',
                            }}
                        >
                            <Image
                                source={assets.tabbar.shield}
                                style={{ width: 35, height: 35 }}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="girls"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 45,
                                height: 45,
                                padding: 20,
                                borderWidth: 2,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: focused ? '#A0D2EC' : 'white',
                                backgroundColor: focused ? '#E2F2FD' : 'white',
                            }}
                        >
                            <Image
                                source={assets.tabbar.girl}
                                style={{ width: 35, height: 35 }}
                            />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="notification"
                options={{
                    title: 'Notificação',
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                width: 45,
                                height: 45,
                                padding: 20,
                                borderWidth: 2,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderColor: focused ? '#A0D2EC' : 'white',
                                backgroundColor: focused ? '#E2F2FD' : 'white',
                            }}
                        >
                            <Image
                                source={assets.tabbar.bell}
                                style={{ width: 35, height: 35 }}
                            />
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}
