import React from 'react';
import Edit from "../img/edit.png";

// interface IProps {
//   id: number,
//   title: string,
//   desc: string,
//   img: string
// }

const Home = () => {

  const posts = [
    {
      id: 1,
      title: "Post 1",
      desc: "Desc 1",
      img: Edit
    },
    {
      id: 2,
      title: "Post 2",
      desc: "Desc 2",
      img: Edit
    },
    {
      id: 3,
      title: "Post 3",
      desc: "Desc 3",
      img: Edit
    }
  ]

  return (
    <div className='home'>
      {posts.map((post) => {
        return (
          <>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.desc}</p>
          </>
        )
      })}
    </div>
  )
}

export default Home
