import React, { useState, useEffect, Component } from 'react';
import db from './../components/firebase.jsx';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./../css/navigation.css";


export default function Messages () {
    let projectData= [];


    function showMessages(){
        console.log(projectData[0][0])

        return (
            <div>
                <h1>Messages</h1>
                <ul>
                {projectData.map(function(project, index){
                        console.log(project[1])
                        let content = project[0]
                        // document.getElementById('projects').innerHTML += `<div><h2>${content.title}</h2><p>${content.synopsis}<p>${content.body}</p><button type="submit">edit</button></div>`
                    let headdiv = document.getElementById('projects');
                    let subdivs = document.createElement('div');
                    headdiv.appendChild(subdivs);

                    let title = document.createElement('h2')
                    title.innerHTML = content.title;
                    subdivs.appendChild(title);

                    let synopsis = document.createElement('p')
                    synopsis.innerHTML = content.synopsis;
                    subdivs.appendChild(synopsis);

                    let divTag = document.createElement('div');
                    subdivs.appendChild(divTag)

                    let tags = content.tags;
                    tags.map(function(tag, index){
                        let aTag = document.createElement('p');
                        aTag.innerHTML = tag;
                        divTag.appendChild(aTag)
                    })

                    let images = content.images;
                    images.map(function(image, index){
                        let imagec = document.createElement('img');
                        imagec.src = image;
                        imagec.style.width="10%"
                        subdivs.appendChild(imagec)
                    })

                    let button = document.createElement('a')
                    button.href = `/project/${project[1]}`
                    button.innerHTML = "edit"
                    subdivs.appendChild(button)
                
                })}
              </ul>
            </div>
        )
    }


    function collection(){
        db.firestore().collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach(function(doc) {
                let project = [doc.data(),doc.id]
                projectData.push(project)
            });
            console.log(projectData)
            showMessages()
            
        });
    }

    function addProject(){

    }
    useEffect(collection,[])


        return (
            <div>
                <h1>Projects</h1>
                <div id="projects"></div>
                <a href="project/add">Add</a>
            </div>
        )
  
}