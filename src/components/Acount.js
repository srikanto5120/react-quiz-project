/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import classes from '../styles/account.module.css';

export default function Account() {
    const { currentUser, logout } = useAuth();

    return (
        <div className={classes.account}>
            {currentUser ? (
                <>
                    <span>{currentUser.displayName}</span>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <span onClick={logout} className="material-icons-outlined" title="Logout">
                        logout
                    </span>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}
