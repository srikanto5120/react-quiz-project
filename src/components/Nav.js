import { Link } from 'react-router-dom';
import logo from '../asserts/images/logo-bg.png';
import nav from '../styles/Nav.module.css';
import Account from './Acount';

export default function Nav() {
    return (
        <div className={nav.nav}>
            <ul>
                <li>
                    <Link to="/" className={nav.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </div>
    );
}
