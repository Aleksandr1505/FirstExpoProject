import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    title: {
        marginBottom: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },

    picture: {
        width: 300,
        height: 300,
        marginBottom: 20
    },

    containerButtons: {
        width: 260,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    buttons: {
        width: 60,
        height: 60,
        alignItems: 'center',
        backgroundColor: '#B7D4FF',
        padding: 16,
        borderRadius: 5
    },

    buttonBack: {
        width: 100,
        height: 60,
        alignItems: 'center',
        backgroundColor: '#B7D4FF',
        padding: 16,
        borderRadius: 5,
        marginTop: 20
    }
})
