import React, { useState } from 'react';
import { View, Text, Button, TextInput, FlatList, Image, StyleSheet } from 'react-native';
import { COLORS } from '../styles/colors'; // Import color constants

const ChallengesPage = () => {
    const [points, setPoints] = useState(100);  // Example points
    const [friendsFeed, setFriendsFeed] = useState([
        { id: '1', name: 'John', imageUrl: 'https://via.placeholder.com/150' },
        { id: '2', name: 'Jane', imageUrl: 'https://via.placeholder.com/150' },
    ]);
    const [newImage, setNewImage] = useState('');

    const handleUpload = () => {
        // Simulate image upload
        setFriendsFeed([{ id: `${friendsFeed.length + 1}`, name: 'You', imageUrl: newImage }, ...friendsFeed]);
        setPoints(points + 10);  // Add points for uploading
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Challenges</Text>
            <FlatList
                data={friendsFeed}
                renderItem={({ item }) => (
                    <View style={styles.feedItem}>
                        <Text>{item.name}</Text>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter image URL"
                value={newImage}
                onChangeText={setNewImage}
            />
            <Button title="Upload Challenge" onPress={handleUpload} />
            <Text style={styles.points}>Points: {points}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.forestGreen, // Forest Green background
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.yellow, // Yellow header text
        marginBottom: 20,
    },
    feedItem: {
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginTop: 10,
    },
    input: {
        height: 40,
        borderColor: COLORS.yellow, // Yellow border color
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    points: {
        marginTop: 20,
        fontSize: 20,
        color: COLORS.yellow, // Yellow points text
    },
});

export default ChallengesPage;
