import React, { useState, useEffect, Component } from 'react';
import db from './../components/firebase.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function AddProject () {

    const [projectData, setData] = useState("")
    const [title, setTitle] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [id, setId] = useState("")
 
    function addImg(){
        console.log(image)
        let inputImage = document.getElementById('images');
        let divImage = document.createElement('div');
        let ImgAdd = document.createElement('img');
        ImgAdd.src=image
        divImage.appendChild(ImgAdd)

        inputImage.appendChild(divImage);

        divImage.appendChild(ImgAdd)

        let deleteInput = document.createElement('button');
        deleteInput.classList.add('btn-remove')
        deleteInput.onclick = function(e){
            e.target.parentNode.remove()
        };
        deleteInput.innerHTML = "x";
        divImage.appendChild(deleteInput)

        inputImage.appendChild(divImage)
    } 

    // function collection(){

    
    //     db.firestore().collection("projects").get().then((querySnapshot) => {
    //         querySnapshot.forEach(function(doc) {
    //                 console.log(doc.data())
    //                 setData(doc.data())
    //                 let inputImages = document.getElementById('images');
    //                 let images = doc.data().images;
    //                 images.map(function(image, index){
    //                     let divImage = document.createElement('div');

    //                     let imageInput = document.createElement('img');
    //                     imageInput.src=image;
    //                     divImage.appendChild(imageInput)

    //                     let deleteInput = document.createElement('button');
    //                     deleteInput.classList.add('btn-remove');
    //                     deleteInput.onclick = function(e){
    //                         e.target.parentNode.remove()
    //                     };
    //                     deleteInput.innerHTML = "x";
    //                     divImage.appendChild(deleteInput)

    //                     inputImages.appendChild(divImage)
    //                 })
    //         });
    //     });
    // }
    // useEffect(collection,[])

    function Save(){
        console.log(document.getElementById('inputId'))

        let imageDivs = document.getElementById('images').children;
        let imagearray = [];
        for(let i =0; i<imageDivs.length ; i++){
            console.log(imageDivs[i].firstElementChild.src)
            imagearray.push(imageDivs[i].firstElementChild.src)
        }

        db.firestore().collection("projects").doc(id).set({
            title: title,
            synopsis: synopsis,
            body: body,
            images: imagearray

        })
    }


    let data = projectData
    console.log(data)

    return (
        <div>
            <h1>hi</h1>
            <div className="project-edit-container form">
                <div>
                    <input type="id" name="id" placeholder="One word about the project" onChange={(e)=>{setId(e.target.value)}}/>
                    <input type="text" name="title" placeholder="title" onChange={(e)=>{setTitle(e.target.value)}}/>
                    <textarea className="text-small" name="synopsis" placeholder="synopsis" onChange={(e)=>{setSynopsis(e.target.value)}}></textarea>
                    <textarea name="body" placeholder="text" onChange={(e)=>{setBody(e.target.value)}}></textarea>
                    <input type="text" name="imgLink" onChange={(e)=>{setImage(e.target.value)}}/>
                    <button className="btn-middle" onClick={addImg}>Add Image</button>
                    <div id="images"></div>

                    <button className="btn-middle btn-fxd" type="submit" onClick={Save}>Save</button>
                </div>
                </div>  
        </div>    
    )

}