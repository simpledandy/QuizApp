import { StyleSheet, Text, View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";
import { useState } from "react";

type QuestionCard = {
    question: Question;
}

export default function QuestionCard({question}: QuestionCard) {

    const [selectedOption, setSelectedOption] = useState<string | undefined>();

    const onOptionSelected = (option: string) => {
        setSelectedOption(option);
    }

    return(
        <View style={styles.questionCard}>

            <Text style={styles.question}>{question.title}</Text>

            <View style={{gap: 10}}>

                {question.options.map( (option) =>
                <AnswerOption
                    key={option}
                    option={option}
                    isSelected={option === selectedOption}
                    onPress={() => onOptionSelected(option)}
                /> )}

                
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