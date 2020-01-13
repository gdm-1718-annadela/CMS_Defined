import React, { useState, useEffect, Component } from 'react';
import db from './../components/firebase.jsx';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function AboutPage () {

    const [aboutData, setData] = useState("")
    function collection(){
        db.firestore().collection("content").get().then((querySnapshot) => {
            querySnapshot.forEach(function(doc) {
                setData(doc.data());
            });
        });
    }
    useEffect(collection,[])
    function edit () {
        window.location.replace("/aboutpage/edit");
    }
    console.log(aboutData);
return(
    <div>
        <div className="right"><h1>Edit the About Page</h1></div>
        <div className="left about">
            <div>
            <h1 className="fonttype">{aboutData.title}</h1>
            <p>{aboutData.synopsis}</p>
            <p>{aboutData.body}</p>
        <button onClick={edit}>
            Edit
        </button>
        <Link to="/aboutpage/edit">Edit</Link>
     
        </div>
        </div>

    </div>

  )
}