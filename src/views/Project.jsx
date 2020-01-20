import React, { useState, useEffect, Component } from 'react';
import db from './../components/firebase.jsx';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Messages () {
    let projectData= [];


    function showMessages(){
        console.log(projectData[0][0])

        return (
            <div>
                <ul>
                    {projectData.map(function(project, index){
                        console.log(project[1])
                        let content = project[0]
                        let headdiv = document.querySelector('.projects');
                        let subdivs = document.createElement('div');
                        subdivs.classList.add('project-container');
                        headdiv.appendChild(subdivs);

                        let title = document.createElement('h2')
                        title.innerHTML = content.title;
                        subdivs.appendChild(title);

                        let button = document.createElement('a')
                        button.href = `/project/edit/${project[1]}`
                        button.innerHTML = "edit"
                        button.classList.add('btn-middle')
                        subdivs.appendChild(button)

                        let btndelete = document.createElement('a');
                        btndelete.href = `/project/delete/${project[1]}`
                        btndelete.innerHTML = "delete"
                        btndelete.classList.add('btn-middle', 'btn-red')
                        subdivs.appendChild(btndelete)
                    
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
    useEffect(collection,[])


        return (
            <div>
                <div className="projects"></div>
                <a className="btn-middle btn-fxd" href="project/add">Add</a>
            </div>
        )
  
}