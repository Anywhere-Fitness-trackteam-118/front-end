// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PopulatedRegisterForm from './components/forms/Registration';
import PrivateRoute from './utils/PrivateRoute';
import Navigation from './components/Navigation';


import PopulatedLoginForm from './components/forms/Login';
import ClassesList from './components/ClassesList';


//context

import AuthState from './context/AuthState';
import ClassesState from './context/ClassesState';
import ClassesProvider from './context/ClassesProvider';

function App() {
  return (
    <ClassesProvider>
      <AuthState>
        <ClassesState>
          <Router>
            <div className="App">
              <Navigation />
              <Switch>
                <Route exact path='/register' component={PopulatedRegisterForm} />
                <Route exact path='/login' component={PopulatedLoginForm} />
                <PrivateRoute exact path='/user' component={ClassesList} />
              </Switch>
            </div>
          </Router>
        </ClassesState>
      </AuthState>

    </ClassesProvider>
    
  );
}

export default App;













// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { getUserInfo } from './state/actions/userActions';
// import AddClasses from './components/AddClasses';
// import Auth from './components/Auth';
// import ClassesList from './components/ClassesList';
// import LogIn from './components/LogIn';
// import LogOut from './components/LogOut';
// import Search from './components/Search';
// import PopulatedSignUpForm from './components/SignUp';
// import './App.css';


// function App({getUserInfo}){

//     const loggedIn = localStorage.getItem('token');
    
//     useEffect(() => {
//         if (loggedIn) {
//             getUserInfo(loggedIn);
//         }
//     }, [loggedIn, getUserInfo]);
    
//     return (
//         <>
//         {/* <NavBar /> */}
//         <Router>
//           <Route exact path = '/log-in' component = {LogIn} />
//           <Route exact path = '/register' component = {PopulatedSignUpForm} />
//           {/* <Route exact path="/classes" component={ClassesList} /> */}
//           <Route />
//         </Router>
//         </>
//       );
// };

// const mapStateToProps = state =>{
//     return {
        
//     };
//   }
  
//   export default connect(mapStateToProps, {getUserInfo})(App);


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <logo />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

// export default App;
