import classes from '../styles/Button.module.css';

export default function Button({ className, children }) {
    // eslint-disable-next-line react/button-has-type
    return <button className={`${className} ${classes.button}`}>{children}</button>;
}
