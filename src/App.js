import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Loader from "react-loader-spinner";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
        setShowLoader(false);
      }
      else {
        dispatch(logout());
        setShowLoader(false);
      }
    })
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        {showLoader ? <Loader
          type="TailSpin"
          color="#a0a0a0"
          height={100}
          width={100}
          timeout={3000} //3 secs
        /> : !user ? (<Login />) :
          (<Switch>
            <Route path="/profile">
              <Profile />
            </Route>
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
