import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import questions from "../questions";

export default function QuizScreen() {

    const question = questions[0];

    return(
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>

                { /* Header */ }

                <View>
                    <Text style={styles.title}>Header</Text>
                </View>

                { /* Body */ }
                <View>
                    <QuestionCard question={question} />
                    <Text style={styles.time}>20 sec</Text>
                </View>
                { /* Footer */ }

                <Pressable
                    onPress={() => console.warn("Pressed!")}
                    onLongPress={() => console.warn("LONG PRESS!")}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next</Text>
                    <FontAwesome6
                        name="arrow-right-long"
                        size={16}
                        color="white"
                        style={styles.buttonIcon}
                    />
                </Pressable>
            </View>
        </SafeAreaView>
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
      buttonIcon: {
        position: 'absolute',
        right: 20,
      },
})