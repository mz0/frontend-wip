// App.jsx
import { useState } from 'react';
import './App.css';

import logo from "./assets/logo.png"
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import HomePage from './HomePage';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return (
        <>
            <img src={logo} alt="Logo" />
            {loggedIn ? (
                <div>
                    <HomePage />
                    <LogoutButton logout={logout} />
                </div>
            ) : (
                <LoginButton login={login} />
            )}
        </>
    );
}

export default App;
