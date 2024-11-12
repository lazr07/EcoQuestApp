import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

// Import the screens (pages)
import HomePage from './pages/HomePage';
import ChallengesPage from './pages/ChallengesPage';
import CameraPage from './pages/CameraPage';
import LeaderboardPage from './pages/LeaderboardPage';
import AddFriendsPage from './pages/AddFriendsPage';

// Import the colors and styles (optional)
import { COLORS } from './styles/colors';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/* StatusBar is optional for mobile-friendly designs */}
            <StatusBar barStyle="light-content" backgroundColor={COLORS.forestGreen} />

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{ title: 'Welcome to EcoQuest', headerStyle: { backgroundColor: COLORS.forestGreen }, headerTintColor: COLORS.yellow }}
                />
                <Stack.Screen
                    name="Challenges"
                    component={ChallengesPage}
                    options={{ title: 'Challenges', headerStyle: { backgroundColor: COLORS.forestGreen }, headerTintColor: COLORS.yellow }}
                />
                <Stack.Screen
                    name="Camera"
                    component={CameraPage}
                    options={{ title: 'Capture Proof', headerStyle: { backgroundColor: COLORS.forestGreen }, headerTintColor: COLORS.yellow }}
                />
                <Stack.Screen
                    name="Leaderboard"
                    component={LeaderboardPage}
                    options={{ title: 'Leaderboard', headerStyle: { backgroundColor: COLORS.forestGreen }, headerTintColor: COLORS.yellow }}
                />
                <Stack.Screen
                    name="AddFriends"
                    component={AddFriendsPage}
                    options={{ title: 'Add Friends', headerStyle: { backgroundColor: COLORS.forestGreen }, headerTintColor: COLORS.yellow }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
