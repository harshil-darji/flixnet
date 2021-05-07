import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }
      else {
        dispatch(logout);
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) :
          (<Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>)
        }
        <div className="app__footer__separator"></div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
