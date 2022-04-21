/* eslint-disable no-unused-vars */
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function useQuestion(videoID) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestion() {
            // database works here
            const db = getDatabase();
            const quizRef = ref(db, `quiz/${videoID}/questions`);

            const quizQuery = query(quizRef, orderByKey());
            try {
                setError(false);
                setLoading(true);
                // request firebase database

                const snapshot = await get(quizQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQuestions((prevQuestion) => [
                        ...prevQuestion,
                        ...Object.values(snapshot.val()),
                    ]);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchQuestion();
    }, [videoID]);

    return {
        loading,
        questions,
        error,
    };
}
