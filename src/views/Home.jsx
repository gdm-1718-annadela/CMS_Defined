import React, { useState, useEffect, Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home () {
  return(
    <div className="homepage">
      <div className="left"><div className="frontimage"></div></div>
      <div className="right">
        <h1 className="frontTitle fonttype">Welkom Admin</h1>
      </div>
    </div>
  )
}