import React from 'react';
import '../assets/styles/Comment.css';
import Comment from './Comment';

function Post({date,author,content,comments}){
  return(
      <div className = "post">

        <div className = "comment">
          <img className = "avatar" src={author.avatar}/>
          <div className = "postData">
            <span className = "author">{author.name}</span>
            <span className = "date">{date}</span>
          </div>
        </div>

        <div className = "postContent content" >
          <p>{content}</p>
        </div>
        <div>
          {
            comments.map(comment => (
              <Comment 
                key = {comment.id}
                avatar = {comment.avatar}
                author = {comment.author}
                content = {comment.content}
              />
            ))
          }
        </div>
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