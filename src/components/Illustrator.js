import illustratorImage from '../asserts/images/signup.svg';
import classes from '../styles/Illustrator.module.css';

export default function Illustrator() {
    return (
        <div className={classes.illustration}>
            <img src={illustratorImage} alt="Signup" />
        </div>
    );
}
