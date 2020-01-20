import React from 'react';
import Home from './views/Home.jsx';
import AboutPage from './views/AboutPage.jsx';
import AboutPageEdit from './views/AboutPageEdit.jsx';
import Messages from './views/Messages.jsx';
import Project from './views/Project.jsx';
import OneProject from './views/OneProject';
import AddProject from './views/AddProject';
import DeleteProject from './views/DeleteProject';

import "./style/general.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
      <div>
        <div className="navigation">
          <a href="/">Home</a>
          <a href="/messages">Messages</a>
          <div className="dropdown">
          <a className="pagemenu" id="pagemenu" href="#">Edit</a>
          <div className="dropdown-content">
            <a href="/aboutpage">About Page</a>
            <a href="/project">Project Page</a>
          </div>
          </div>
        </div>
    </div>

    <Router>
    <div className="page">
      <Route path="/" component={Home} exact/>
      <Route path="/aboutpage" component={AboutPage} exact/>
      <Route path="/aboutpage/edit" component={AboutPageEdit} exact/>
      <Route path="/messages" component={Messages} exact/>
      <Route path="/project" component={Project} exact/>
      <Route path="/project/edit/:id" component={OneProject} exact/>
      <Route path="/project/add" component={AddProject} exact/>
      <Route path="/project/delete/:id" component={DeleteProject} exact/>
    </div>
    </Router>

    </div>
  );
}

export default App;
