import Illustrator from '../components/Illustrator';
import SignUpForm from '../components/SignupForm';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustrator />
                <SignUpForm />
            </div>
        </>
    );
}
