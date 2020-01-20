import React, { useState, useEffect, Component } from 'react';
import db from '../components/firebase.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function DeleteProject ({match}) {

    console.log(match.params.id)

    db.firestore().collection("projects").doc(match.params.id).delete().then(function() {
      console.log("Document successfully deleted!");
      window.location.replace('/project');

  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });

    return (
        <div>
           <h2>Deleting</h2>
        </div>    
    )

}