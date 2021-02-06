import React, { useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Paper, Button} from '@material-ui/core';


const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const authContext = useContext(AuthContext);
    const { loadUser, isAuthenticated, logout } = authContext;

    return (
        <div>
            <Paper>
                <Button href="/user" className="mr-auto">Anywhere Fitness</Button>

                            <Button   component="button"
  variant="body2" id='register' href="/register" color="primary">Register</Button>

                            <Button   component="button"
  variant="body2" id='logIn' href="/login">Login</Button>

                            <Button   component="button"
  variant="body2" id='logOut' href='/login'   onClick={logout}>Logout</Button>
</Paper>
        </div>
    );
}

export default Navigation;