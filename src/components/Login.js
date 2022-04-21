/* eslint-disable react/jsx-no-bind */
/* eslint-disable consistent-return */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import classes from '../styles/Login.module.css';
import Button from './Button';
import From from './From';
import Illustrator from './Illustrator';
import TextInput from './TextInput';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const nevigate = useNavigate();

    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            nevigate('/');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to login!');
        }
    }

    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustrator />
                <From className={classes.login} action="#" onSubmit={handleSubmit}>
                    <TextInput
                        type="text"
                        required
                        placeholder="Enter email"
                        icon="alternate_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        type="password"
                        required
                        placeholder="Enter password"
                        icon="lock"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" disabled={loading}>
                        <span>Submit Now</span>
                    </Button>
                    {error && <span className="error">{error}</span>}

                    <div className="info">
                        You are new user plase singup? <Link to="/signup">Signup</Link> instead.
                    </div>
                </From>
            </div>
        </>
    );
}
