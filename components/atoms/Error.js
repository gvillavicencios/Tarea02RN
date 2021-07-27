import React from 'react'
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'

const Error = ({ color, text, subText, subColor }) => {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../.vscode/assets/images/error.png')} />

                <View>
                    <Text style={{ color: color, fontWeight: 'bold', fontSize: 20 }}>{text}</Text>

                    <Text style={[styles.subText, { color: subColor, fontWeight: 'bold', fontSize: 15 }]}>{subText}</Text>

                </View>
            </View>

            <View style={styles.buttonPosition}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Actualizar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200
    },
    button: {
        backgroundColor: "#1E6AD2",
        color: "#ffff",
        padding: 10,
        width: "100%",
        borderRadius: 15
    },
    buttonPosition: {
        marginTop: 20,
        marginHorizontal: 10

    },
    buttonText: {
        fontSize: 15,
        color: "#ffff",
        textAlign: 'center'

    },
    subText: {
        marginTop: 10,
        textAlign: 'center'
    }
});


export default Error
