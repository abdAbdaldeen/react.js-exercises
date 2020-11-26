import React from 'react';
import Stories from '../../Components/stories/stories'
import './style.css'
import Posts from '../../Components/Posts/posts'
function Home() {

  return (
    <div className="home">
      <Stories className="stories"/>
      <Posts />
    </div>
  );
}

export default Home;
