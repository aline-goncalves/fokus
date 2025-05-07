import { Pressable, StyleSheet, Text } from "react-native"

export const MenuItem = ({ active, onPress, display }) => {
    return (
        <Pressable
            style={ active ? styles.menuItemTextActive : null }
            onPress={ onPress }>
            <Text style={styles.menuItemText}>{ display }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    menuItemText: {
        fontSize: 12.5,
        color: '#fff',
        padding: 8,
    },
    menuItemTextActive: {
        backgroundColor: '#144480',
        borderRadius: 8
    },
})