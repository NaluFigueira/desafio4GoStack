import React from 'react';
import '../assets/styles/Comment.css';

function Comment({author,content}){
  return(
    <div className="comment">
      <img className = "avatar" src = {author.avatar} />
      <div className= "commentContent content">
        <span className = "author">{author.name} </span>
        <span style = {{fontFamily: 'Helvetica'}}>{content}</span>
      </div>
    </div>
  );
}

Comment.defaultProps = {
  avatar: require('../assets/images/guy1.jpg'),
  author: 'Jon Doe',
  content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore laboriosam veniam, eveniet dolores sed esse accusamus pariatur enim magnam illo quas dignissimos assumenda repudiandae quo laudantium nisi explicabo suscipit odio!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore laboriosam veniam, eveniet dolores sed esse accusamus pariatur enim magnam illo quas dignissimos assumenda repudiandae quo laudantium nisi explicabo suscipit odio!'
}

export default Comment;