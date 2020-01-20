import React, { useState, useEffect, Component } from 'react';
import db from './../components/firebase.jsx';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Messages () {
    let messageData= [];

    function showMessages(){
        console.log(messageData[0].email)
            messageData.map(function(message, index){
                    document.getElementById('messages').innerHTML += `<div><h2>${message.name}</h2><p>${message.message}</p><a href="mailto:${message.email}"><span>${message.email}</span></p></div>`
            })
        }


    function collection(){
        db.firestore().collection("messages").get().then((querySnapshot) => {
            querySnapshot.forEach(function(doc) {
                console.log(doc.data());
                messageData.push(doc.data())
            });
            console.log(messageData)
            showMessages()
            
        });
    }
    useEffect(collection,[])


        return (
            <div>
                <div className="right fonttype">
                <h1>Messages</h1>
                </div>
                <div className="left fonttype">
                <div className="messages" id="messages"></div>
                </div>
            </div>
        )
  
}