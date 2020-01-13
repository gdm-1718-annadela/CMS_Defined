import React, { useState, useEffect, Component } from 'react';
import db from './../components/firebase.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function OnePeriod ({match}) {

    const [projectData, setData] = useState("")
    const [title, setTitle] = useState("")
    const [synopsis, setSynopsis] = useState("")
    const [body, setBody] = useState("")
    const [image, setImage] = useState("")
    const [iddata, setId] = useState("")

    function addTag(){
        let inputTags = document.getElementById('tags');
        let divTag = document.createElement('div');
        let tagInputAdd = document.createElement('input');
        divTag.appendChild(tagInputAdd)

        inputTags.appendChild(divTag);
        divTag.appendChild(tagInputAdd)

        let deleteInput = document.createElement('button');
        deleteInput.onclick = function(e){
            e.target.parentNode.remove()
        };
        deleteInput.innerHTML = "delete";
        divTag.appendChild(deleteInput)

        inputTags.appendChild(divTag)
    } 
    function addImg(){
        console.log(image)
        let inputImage = document.getElementById('images');
        let divImage = document.createElement('div');
        let ImgAdd = document.createElement('img');
        ImgAdd.src=image
        ImgAdd.style.width="20%"
        divImage.appendChild(ImgAdd)

        inputImage.appendChild(divImage);

        divImage.appendChild(ImgAdd)

        let deleteInput = document.createElement('button');
        deleteInput.onclick = function(e){
            e.target.parentNode.remove()
        };
        deleteInput.innerHTML = "delete";
        divImage.appendChild(deleteInput)

        inputImage.appendChild(divImage)
    } 

    function collection(){

    
        db.firestore().collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach(function(doc) {
                if(doc.id == match.params.id){
                    console.log(doc.data())
                    setData(doc.data())
                    let inputTags = document.getElementById('tags');

                    let tags = doc.data().tags;
                    console.log(tags)
                    tags.map(function(tag, index){
                        let divTag = document.createElement('div');

                        let tagInput = document.createElement('input');
                        tagInput.defaultValue = tag;
                        divTag.appendChild(tagInput)

                        let deleteInput = document.createElement('button');
                        deleteInput.onclick = function(e){
                            e.target.parentNode.remove()
                        };
                        deleteInput.innerHTML = "delete";
                        divTag.appendChild(deleteInput)

                        inputTags.appendChild(divTag)
                    })

                    let inputImages = document.getElementById('images');
                    let images = doc.data().images;
                    images.map(function(image, index){
                        let divImage = document.createElement('div');

                        let imageInput = document.createElement('img');
                        imageInput.src=image;
                        imageInput.style.width="20%"
                        divImage.appendChild(imageInput)

                        let deleteInput = document.createElement('button');
                        deleteInput.onclick = function(e){
                            e.target.parentNode.remove()
                        };
                        deleteInput.innerHTML = "delete";
                        divImage.appendChild(deleteInput)

                        inputImages.appendChild(divImage)
                    })

                }
            });
        });
    }
    useEffect(collection,[])

    function Save(){
        console.log(document.getElementById('inputId'))

            if(title !== ""){
                db.firestore().collection("projects").doc(match.params.id).update({
                    title: title
                })
            }
            if(synopsis !== ""){
                db.firestore().collection("projects").doc(match.params.id).update({
                    synopsis: synopsis
                })
            }
            if(body !== ""){
                db.firestore().collection("projects").doc(match.params.id).update({
                    body: body
                })
            }
            let tagDivs = document.getElementById('tags').children;
            let tagarray = [];
            for(let i =0; i<tagDivs.length ; i++){
                tagarray.push(tagDivs[i].firstElementChild.value)
            }
            db.firestore().collection("projects").doc(match.params.id).update({
                tags: tagarray
            })

            let imageDivs = document.getElementById('images').children;
            let imagearray = [];
            for(let i =0; i<imageDivs.length ; i++){
                console.log(imageDivs[i].firstElementChild.src)
                imagearray.push(imageDivs[i].firstElementChild.src)
            }
            db.firestore().collection("projects").doc(match.params.id).update({
                images: imagearray
            })
        
    }


    let data = projectData
    console.log(data)

    return(
        <div>
            <input type="text" name="title" defaultValue={projectData.title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="text" name="synopsis" defaultValue={projectData.synopsis} onChange={(e)=>{setSynopsis(e.target.value)}}/>
            <input type="textarea" name="body" defaultValue={projectData.body} onChange={(e)=>{setBody(e.target.value)}}/>
            <div id="tags"></div>
            <button onClick={addTag}>Add Tag</button>
            <input type="text" name="imgLink" onChange={(e)=>{setImage(e.target.value)}}/>
            <button onClick={addImg}>Add Image</button>
            <div id="images"></div>

            <button type="submit" onClick={Save}>Save</button>
        </div>    
    )

}