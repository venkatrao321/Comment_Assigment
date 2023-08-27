import { useEffect, useState } from "react"
import {getcomments as getCommentsApi} from "../api"

function Comments({CurrentUserId}) {
    const [userComments,setUserComments]=useState([]);
    useEffect(()=>{
      getCommentsApi().then(data=>{
        setUserComments(data);
      })
    },[])
  return (
    <div className="comments">
      
    </div>
  )
}

export default Comments