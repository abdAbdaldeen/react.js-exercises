import React, { useState } from 'react';
import './style.css'
function Post(props) {
    const [c, setC] = useState(props.numLike);
    const [isRed , setRed]=useState(false);
    const likeBtn = ()=>{
        if (!isRed) {
            setC(c+1);
        }
        else{
            setC(c-1);
        }
        setRed(!isRed);
      }
  return (
    <div className="post">
     <div className="post-header">
     <div className={props.isNew ? "ring new" : "ring old"}>
        <img className="profileImg" src={props.profileImg} alt=""/>
        </div>

        <div className="name-loc">
  <p className="name">{props.name}</p>
            <p className="loc">{props.postLoc}</p>
        </div>
     </div>
     <img className="postImg" src={props.postImg} alt=""/>
     <div className="post-body">
         <div className="reactions-row">
             <div>
             <button onClick={likeBtn} ><i className={isRed ? 'red fas fa-heart' : "far fa-heart"} ></i></button>
             <button><i class="far fa-comment"></i></button>
             <button><i class="far fa-paper-plane"></i></button>
             </div>
             <button><i class="far fa-bookmark"></i></button>
         </div>
         <p className="likes">{c} Likes</p>
         <div className="comments">
         {props.comments.map(comment => (
             <p><b>{comment.name}</b> {comment.text}</p>
         ))}
         </div>
         <p className="time">{props.postTime} HOURS AGO</p>
         
     </div>
         <input type="text" placeholder="Add a comment"/>
     
    </div>
  );
}

export default Post;
