import React from 'react';
import '../assets/styles/Comment.css';
import Comment from './Comment';

function Post({avatar,date,author,content}){
  return(
      <div className = "post">

        <div className = "comment">
          <img className = "avatar" src={avatar}/>
          <div className = "postData">
            <span className = "author">{author}</span>
            <span className = "date">{date}</span>
          </div>
        </div>

        <div className = "postContent content" >
          <p>{content}</p>
        </div>
        <Comment />
      </div>
  );
}

Post.defaultProps = {
  avatar: require('../assets/images/guy2.jpg'),
  date: '04 Jun 2019',
  author: 'Jon Doe',
  content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '
}

export default Post;