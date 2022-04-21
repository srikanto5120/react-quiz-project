import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import Home from '../Pages/Home';
import Results from '../Pages/Results';
import Signup from '../Pages/Singup';
import '../styles/App.css';
import Login from './Login';
import Layout from './Lyout';
import PrivateRoute from './PrivateRoute';
import Quiz from './Quiz';

export default function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                            <Route
                                path="/quiz/:id"
                                element={
                                    <PrivateRoute>
                                        <Quiz />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="/result" element={<Results />} />
                        </Routes>
                    </Layout>
                </AuthProvider>
            </Router>
        </div>
    );
}
