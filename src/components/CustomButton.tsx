import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { ComponentProps } from "react";

type CustomButton = {
    title: string;
    rightIcon?: React.ReactNode;
    onPress: () => void;
} & ComponentProps<typeof Pressable>;

export default function CustomButton({
    title,
    rightIcon,
    ...pressableProps
} : CustomButton) {
    return (
        <Pressable
            {...pressableProps}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{title}</Text>
            <View style={styles.rightIcon}>{rightIcon}</View>
            
        </Pressable>
    )
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FDFEF4',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    title: {
        textAlign: "center",
        color: '#005055'
    },
    time: {
        textAlign: 'center',
        marginTop: 15,
        color: '#005055',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#005055',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5,
    },
    rightIcon: {
        position: 'absolute',
        right: 20,
    },
})