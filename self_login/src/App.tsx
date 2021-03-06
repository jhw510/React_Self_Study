import React from 'react';
import {Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import './App.css';

function App() {
  return (
    <>
    <Route component={PostListPage} path={['/@:username','/']}exact/>
    <Route component={LoginPage} path="/login"/>
    <Route component={RegisterPage} path="/refister"/>
    <Route component={WritePage} path="/write"/>
    <Route component={PostPage} path="/@:username/:postId"/>

    </>
  );
}

export default App;
