import { Link, Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/TabBarIcon';
import { HeaderButton } from '../../components/HeaderButton';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'black',
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Duolingo',
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                    tabBarStyle: {
                        backgroundColor: 'white',
                    },
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
                    tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
                }}
            />
        </Tabs>
    );
}
