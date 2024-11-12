import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';  // For handling HTTP requests
import { COLORS } from '../styles/colors'; // Import color constants

const HomePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const navigation = useNavigation();

    const handleAuth = async () => {
        if (isLogin) {
            try {
                // Replace with your actual login API endpoint
                const response = await axios.post('https://example.com/api/login', {
                    username,
                    password,
                });
                console.log(response.data);  // Handle the response (e.g., save tokens)
                navigation.navigate('Challenges');
            } catch (error) {
                console.error(error);
            }
        } else {
            try {
                // Replace with your actual signup API endpoint
                const response = await axios.post('https://example.com/api/signup', {
                    username,
                    password,
                });
                console.log(response.data);  // Handle the response
                navigation.navigate('Challenges');
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleAuth} />
            <Button
                title={isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
                onPress={() => setIsLogin(!isLogin)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.forestGreen, // Forest Green background
    },
    title: {
        fontSize: 30,
        color: COLORS.yellow, // Yellow title text
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: COLORS.yellow, // Yellow border color
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        width: 200,
        color: 'black',
    },
});

export default HomePage;
