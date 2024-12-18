import React from 'react';
import Edit from "../img/edit.png";
import { Link } from 'react-router-dom';

interface IProps {
  id: number,
  title: string,
  desc: string,
  img: string
}

const Home = () => {

  const posts: IProps[] = [
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
    },
    {
      id: 4,
      title: "Post 4",
      desc: "Desc 4",
      img: Edit
    }
  ]

  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt='' />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
