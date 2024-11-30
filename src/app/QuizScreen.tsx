import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import questions from "../questions";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function QuizScreen() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const question = questions[questionIndex];

    const onNext = () => {
        setQuestionIndex((currValue) => currValue + 1);
    }

    return(
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>

                { /* Header */ }

                <View>
                    <Text style={styles.title}>Header</Text>
                </View>

                { /* Body */ }
                {question ? (
                    <View>
                        <QuestionCard question={question} />
                        <Text style={styles.time}>20 sec</Text>
                    </View>
                ) : (
                    <Card title="Well Done!">
                        <Text>Correct Answers: 3/5</Text>
                    </Card>
                )}

                { /* Footer */ }

                <CustomButton
                    title="Next"
                    rightIcon={
                        <FontAwesome6
                            name="arrow-right-long"
                            size={16}
                            color="white"
                            style={styles.buttonIcon}
                    />}
                    onPress={onNext}
                />
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