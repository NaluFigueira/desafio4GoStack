import React from 'react';
import '../assets/styles/PostList.css';
import './Post';

class PostList extends React.Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jon Doe",
          avatar: "../assets/images/guy1.jpg"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate rerum, ab, dicta est voluptatibus blanditiis sed eligendi perferendis sit fugiat aut minus in? Commodi obcaecati similique eveniet vitae iusto!",
        comments: [
          {
            id: 1,
            author: {
              name: "Jon Doe",
              avatar: "../assets/images/guy2.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate rerum, ab, dicta est voluptatibus blanditiis sed eligendi perferendis sit fugiat aut minus in? Commodi obcaecati similique eveniet vitae iusto!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Jon Doe",
          avatar: "../assets/images/guy3.jpg"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate rerum, ab, dicta est voluptatibus blanditiis sed eligendi perferendis sit fugiat aut minus in? Commodi obcaecati similique eveniet vitae iusto!",
        comments: [
          {
            id: 2,
            author: {
              name: "Jon Doe",
              avatar: "../assets/images/guy2.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate rerum, ab, dicta est voluptatibus blanditiis sed eligendi perferendis sit fugiat aut minus in? Commodi obcaecati similique eveniet vitae iusto!"
          },
          {
            id: 3,
            author: {
              name: "Mary Doe",
              avatar: "../assets/images/lady1.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate rerum, ab, dicta est voluptatibus blanditiis sed eligendi perferendis sit fugiat aut minus in? Commodi obcaecati similique eveniet vitae iusto!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Jon Doe",
          avatar: "../assets/images/guy3.jpg"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate rerum, ab, dicta est voluptatibus blanditiis sed eligendi perferendis sit fugiat aut minus in? Commodi obcaecati similique eveniet vitae iusto!",
        comments: [
          {
            id: 4,
            author: {
              name: "Jon Doe",
              avatar: "../assets/images/guy2.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate rerum, ab, dicta est voluptatibus blanditiis sed eligendi perferendis sit fugiat aut minus in? Commodi obcaecati similique eveniet vitae iusto!"
          },
          {
            id: 5,
            author: {
              name: "Mary Doe",
              avatar: "../assets/images/lady1.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto cupiditate rerum, ab, dicta est voluptatibus blanditiis sed eligendi perferendis sit fugiat aut minus in? Commodi obcaecati similique eveniet vitae iusto!"
          }
        ]
      },
    ]
  }

  render(){
      this.state.posts.map(post => {
        return(
          <Post avatar = {post.avatar} author = {post.author} content ={post.content}/>
        );
      }
    );
  }

}