import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableHighlight>
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
                <TouchableOpacity onPress={() => pressHandler(item.key)}>
                    <MaterialIcons style={styles.icon} name='delete' size={18} color='white' />
                </TouchableOpacity>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#8d65f4',
    },
    itemText: {
        flex: 1,
        marginLeft: 10,
        color: 'white'
    },
    icon: {
        marginLeft: 20,
        alignContent: 'center',
        justifyContent: 'flex-end',
    },
});