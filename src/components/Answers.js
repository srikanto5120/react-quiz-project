/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import classes from '../styles/Answer.module.css';
import Checkbox from './Checkbox';

export default function Answers({ options = [], handleAnswerChange }) {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <Checkbox
                    className={classes.answer}
                    text={option.title}
                    checked={option.checked}
                    value={index}
                    onChange={(e) => handleAnswerChange(e, index)}
                />
            ))}
        </div>
    );
}
