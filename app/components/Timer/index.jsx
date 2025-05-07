import { StyleSheet, Text } from "react-native"

export const Timer = ({ initialValue } ) => {
    return (
        <Text style={styles.timer}>
            {new Date(initialValue * 1000).toLocaleTimeString(
                'pt-BR', { minute: '2-digit', second: '2-digit' }
            )}
        </Text>
    )
}

const styles = StyleSheet.create({
    timer: {
        fontSize: 54,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})