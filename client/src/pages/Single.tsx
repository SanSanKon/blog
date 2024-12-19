import React from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src='' alt='' />
        <div className="user">
          <img src='' alt='' />
            <div className="info">
              <span>UserName</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt='' />
              </Link>
              <img src={Delete} alt='' />
            </div>
        </div>
        <h1>Title of the post</h1>
        <p>What the user has written in his post</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single
