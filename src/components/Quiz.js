/* eslint-disable react/jsx-no-bind */
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import useQuestion from '../hooks/useQuestion';
import Answers from './Answers';
import MiniPlayer from './MiniPlayer';
import ProgressBar from './ProgressBar';

const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case 'questions':
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    // eslint-disable-next-line no-param-reassign
                    option.checked = false;
                });
            });
            return action.value;
        case 'answer':
            // eslint-disable-next-line no-case-declarations
            const questions = _.cloneDeep(state);
            questions[action.questionsID].options[action.optionIndex].checked = action.value;
            return questions;
        default: {
            return state;
        }
    }
};

export default function Quiz() {
    const { id } = useParams();

    // eslint-disable-next-line no-unused-vars
    const { questions, loading, error } = useQuestion(id);

    // eslint-disable-next-line no-unused-vars
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [qna, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({
            type: 'questions',
            value: questions,
        });
    }, [questions]);

    function handleAnswerChange(e, index) {
        dispatch({
            type: 'answer',
            questionsID: currentQuestion,
            optionIndex: index,
            value: e.target.checked,
        });
    }

    return (
        <>
            {loading && <div>loading...</div>}
            {error && <div>there is error</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestion].title}</h1>

                    <h4>Question can have multiple answers</h4>
                    <Answers
                        options={qna[currentQuestion].options}
                        handleAnswerChange={handleAnswerChange}
                    />
                    <ProgressBar />

                    <MiniPlayer />
                </>
            )}
        </>
    );
}
