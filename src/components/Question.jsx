import QuestionTimer from "./QuestionTime";
import Answers from "./Answers";
import QUESTIONS from '../questions.js';
import { useState } from "react";

export default function Question({questionIndex, onSelectAnswer, onSkipAnswer}){
    const [answer,setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        });
        
        setTimeout(()=>{
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer
            });
            
            setTimeout(()=>{
                onSelectAnswer(answer);
            },2000);
        },1000);
    }

    let answerState  = '';
    if(answer.selectedAnswer){
        answerState = answerState.isCorrect ? 'correct' : 'wrong';
    }

    return <div id="question">
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer}/>
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers
                answers={QUESTIONS[questionIndex].answers} 
                selectedAnswer={answer.selectedAnswer} 
                answerState={answerState}
                onSelect={handleSelectAnswer}/>
        </div>;
}