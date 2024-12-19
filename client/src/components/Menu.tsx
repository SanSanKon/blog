import React from 'react';
import Edit from "../img/edit.png";

interface IProps {
    id: number,
    title: string,
    desc: string,
    img: string
};

const Menu = () => {

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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt='' />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))
        }
    </div>
  )
}

export default Menu
