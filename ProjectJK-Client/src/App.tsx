import React, {Fragment} from 'react';
import './App.scss';
import NavBar from "components/common/NavBar";
import {Route, Routes} from "react-router-dom";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
      <Fragment>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/sign-in" element={<SignIn/>}/>
              <Route path="/sign-up" element={<SignUp/>}/>
              <Route path="*" element={<NotFound/>}/>
          </Routes>
      </Fragment>
  );
}

export default App;
