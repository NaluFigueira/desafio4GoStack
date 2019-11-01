import React from 'react';
import Comment from './Comment';
import PropTypes from 'proptypes';

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
  date: '04 Jun 2019',
  author: {
    name:'Jon Doe',
    avatar: require('../assets/images/guy2.jpg')
  },
  content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '
}

Post.propTypes = {
  date: PropTypes.string,
  author: PropTypes.object,
  content: PropTypes.string
}

export default Post;