import { StyleSheet, Text, View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";

type QuestionCard = {
    question: Question;
}

export default function QuestionCard({question}: QuestionCard) {

    const onOptionSelected = (option: string) => {
        console.warn("Selected: ", option);
    }

    const selectedOption = question.options[0];

    return(
        <View style={styles.questionCard}>
            <Text style={styles.question}>{question.title}</Text>

            <View style={{gap: 10}}>
                <AnswerOption
                    option={question.options[0]}
                    isSelected={question.options[0] === selectedOption}
                    onPress={() => onOptionSelected(question.options[0])}
                />
                <AnswerOption
                    option={question.options[1]}
                    isSelected={question.options[1] === selectedOption}
                    onPress={() => onOptionSelected(question.options[1])}
                />
                <AnswerOption
                    option={question.options[2]}
                    isSelected={question.options[2] === selectedOption}
                    onPress={() => onOptionSelected(question.options[2])}
                />
                <AnswerOption
                    option={question.options[3]}
                    isSelected={question.options[3] === selectedOption}
                    onPress={() => onOptionSelected(question.options[3])}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    questionCard: {
        backgroundColor: 'white',
        padding: 20,
        paddingVertical: 40,
        borderRadius: 20,
        gap: 20,

        //shadows
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    question: {
        fontSize: 24,
        fontWeight: '500',
    },
})