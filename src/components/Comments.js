import { useEffect, useState } from "react"
import {getComments as getCommentsApi} from "../api";
import Comment from "./Comment";
import React from "react";
function Comments({CurrentUserId}) {
    const [userComments,setUserComments]=useState([]);
    const rootComment=userComments.filter(data=>data.parentId==null)
    useEffect(()=>{
      getCommentsApi().then(data=>{
        setUserComments(data);
        console.log(data)
      })
    },[])
  return (
    <div className="comments">
      <h3 className="comments-title">
      comments
      </h3>
        <div className="comments-container">
          {rootComment.map(rootComment=>{
            
            return  <Comment key={rootComment.id} comment={rootComment}></Comment>
             
          })}
        </div>
    </div>
  )
}

export default Comments