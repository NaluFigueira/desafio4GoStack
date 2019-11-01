import React from 'react';
import Post from './Post';

class PostList extends React.Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Jonny Schofield",
          avatar: require("../assets/images/guy1.jpg")
        },
        date: "04 Jun 2019",
        content: "Hey guys, does someone know if Rockseat is hiring?",
        comments: [
          {
            id: 1,
            author: {
              name: "Scott Bolto",
              avatar: require("../assets/images/guy2.jpg")
            },
            content: "Diego said that Rocketseat is always " +
            "looking for new team members, and usually they keep an eye "+ 
            "out for people who stand out in Bootcamp. Actually, 80% of the "+
            "current dev team is made of Bootcamp students. Besides, Diego said that "+ 
            "if you wish to teach by recording videos and writing posts, "+
            "you can call him on Discord."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Manuel Sandoval",
          avatar: require("../assets/images/guy3.jpg")
        },
        date: "04 Jun 2019",
        content: "Hey guys, how it's going? I'm at Rocketseat's GoStack " +
        "Bootcamp and it has been an amazing experience! Are there other " +
        "students around here? Comment in this post so we can talk about it! ",
        comments: [
          {
            id: 2,
            author: {
              name: "Scott Bolto",
              avatar: require("../assets/images/guy4.jpg")
            },
            content: "Awesooooooooome! I'm thinking about enrolling in the "+
            "next edition to see if it's worth it, I heard that devs get out "+
            "there with super powers!"
          },
          {
            id: 3,
            author: {
              name: "Ava Smith",
              avatar: require("../assets/images/lady1.jpg")
            },
            content: "I'm also attending to the Bootcamp and I'm loving it! "+
            "I'm in the third module and I already have my Gympoint's API done!"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Manuel Sandoval",
          avatar: require("../assets/images/guy3.jpg")
        },
        date: "04 Jun 2019",
        content: "Hey guys, how it's going? I'm at Rocketseat's GoStack " +
        "Bootcamp and it has been an amazing experience! Are there other " +
        "students around here? Comment in this post so we can talk about it! ",
        comments: [
          {
            id: 4,
            author: {
              name: "Scott Bolto",
              avatar: require("../assets/images/guy4.jpg")
            },
            content: "Awesooooooooome! I'm thinking about enrolling in the "+
            "next edition to see if it's worth it, I heard that devs get out "+
            "there with super powers!"
          },
          {
            id: 5,
            author: {
              name: "Ava Smith",
              avatar: require("../assets/images/lady1.jpg")
            },
            content: "I'm also attending to the Bootcamp and I'm loving it! "+
            "I'm in the third module and I already have my Gympoint's API done!"
          }
        ]
      },
    ]
  }

  render(){
    return(
      <div>
        {this.state.posts.map(post => (
            <Post 
              key = {post.id}
              date = {post.date}
              author = {post.author} 
              content ={post.content} 
              comments = {post.comments}
            />
        )
        )}
      </div>
    );
  }

}

export default PostList;