import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
    },
    title: {
        textAlign: 'center',
        color: '#8d65f4',
        fontSize: 20,
        fontWeight: 'bold',
    }
});