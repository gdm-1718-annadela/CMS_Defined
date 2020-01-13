import React, { useState, useEffect, Component } from 'react';
import db from './../components/firebase.jsx';


export default function AboutPageEdit () {
    const [aboutData, setData] = useState("")
    const [title, setTitle] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [body, setBody] = useState("")



    function collection(){
        db.firestore().collection("content").get().then((querySnapshot) => {
            querySnapshot.forEach(function(doc) {
                setData(doc.data());
            });
        });
    }

    useEffect(collection,[])

    function Edit(){
        if(title !== ""){
            db.firestore().collection("content").doc('about_general').update({
                title: title
            })
        }
        if(synopsis !== ""){
            db.firestore().collection("content").doc('about_general').update({
                synopsis: synopsis
            })
        }
        if(body !== ""){
            db.firestore().collection("content").doc('about_general').update({
                body: body
            })
        }
        
    }


return(
    <div>
        <div className="right"><h1>Edit</h1></div>
        <div className="left">
        <input type="text" name="title" defaultValue={aboutData.title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="text" name="synopsis" defaultValue={aboutData.synopsis} onChange={(e)=>{setSynopsis(e.target.value)}}/>
        <input type="textarea" name="body" defaultValue={aboutData.body} onChange={(e)=>{setBody(e.target.value)}}/>
        <button type="submit" onClick={Edit}>Edit</button>
        </div>
    </div>

  )
}