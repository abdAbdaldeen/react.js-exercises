import React, { useState } from 'react';

import './style.css'
import Post from './post'
function Posts() {
    const [info, setInfo]=useState([
        {name: "Dana", profileImg:"https://media-exp1.licdn.com/dms/image/C5603AQGzYuJ5d1yBIQ/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=bGSSPa42MJYDp-qm0kMfKAcTnCqUXmvprbL7XG8fmMw",isNew:true, postImg:"https://sa2eh.awicdn.com/site-images/sites/default/files/sa2eh-prod/article/3/9/272265/cfa3e4fd25c4d3ca4ba90d942641b8ca497e45ce-301217013100.jpg?preset=v3.0_970XDYN&save-png=1",postTime:3,comments:[{name:"Abdel rahman",text:"Nice 🤍"},{name:"z3f",text:"💔"}],numLike:115,postLoc:"Amman, Jordan"},
        {name: "JOJ", profileImg:"https://media-exp1.licdn.com/dms/image/C4D03AQGe4_04wqmMoQ/profile-displayphoto-shrink_800_800/0?e=1611187200&v=beta&t=McaMb9HMzXln2YYj8svFzVAZ29Cuwh1kH8xlQYGwsZE",isNew:true, postImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Alhambra-Granada-2003.jpg/1200px-Alhambra-Granada-2003.jpg",postTime:3,comments:[{name:"Abdel rahman",text:"Nice 💚"},{name:"z3f",text:"😍👍"}],numLike:99,postLoc:"Amman, Jordan"},
        {name: "Maysam", profileImg:"https://avatars2.githubusercontent.com/u/71770879?s=400&u=2b363f174c196ad0a14ecb5a3a3dbe37550d952b&v=4",isNew:false, postImg:"https://images.pexels.com/photos/4753649/pexels-photo-4753649.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",postTime:6,comments:[{name:"Abdel rahman",text:"Nice 😍"}],numLike:515,postLoc:"Amman, Jordan"},
        {name: "Monther", profileImg:"https://osamaaburabie.github.io/react.js-exercises/static/media/4.47f30d25.jpg",isNew:true, postImg:"https://images.pexels.com/photos/5507729/pexels-photo-5507729.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",postTime:8,comments:[{name:"Abdel rahman",text:"Nice 🤎"},{name:"z3f",text:"🤩🤩"}],numLike:535,postLoc:"Amman, Jordan"},
        {name: "Osama", profileImg:"https://osamaaburabie.github.io/react.js-exercises/static/media/3.e64bf312.jpg",isNew:true, postImg:"https://images.pexels.com/photos/4274984/pexels-photo-4274984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",postTime:12,comments:[{name:"Abdel rahman",text:"Nice 💜"},{name:"z3f",text:"🤩🤩"}],numLike:55,postLoc:"Amman, Jordan"},
        {name: "Ahmad", profileImg:"https://osamaaburabie.github.io/react.js-exercises/static/media/5.dec90888.jpg",isNew:true, postImg:"https://p0.pikist.com/photos/257/664/granada-world-heritage-site-alhambra-islamic-art.jpg",postTime:7,comments:[{name:"Abdel rahman",text:"Nice 🤍"},{name:"z3f",text:"🤩🤩🤩"}],numLike:55,postLoc:"Amman, Jordan"},
        {name: "Ashrf", profileImg:"https://osamaaburabie.github.io/react.js-exercises/static/media/6.6ced265d.jpg",isNew:true, postImg:"https://media.albayan.ae/reda%20potos/hamrraa%20(10).jpg",postTime:2,comments:[{name:"Abdel rahman",text:"Nice 🤍"},{name:"z3f",text:"😍👍"}],numLike:55,postLoc:"Amman, Jordan"},
        {name: "Abdullah", profileImg:"https://osamaaburabie.github.io/react.js-exercises/static/media/7.b9d40660.jpg",isNew:true, postImg:"https://images.pexels.com/photos/5020995/pexels-photo-5020995.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",postTime:4,comments:[{name:"Abdel rahman",text:"Nice 🖤"},{name:"z3f",text:"😍👍"}],numLike:25,postLoc:"Amman, Jordan"},
        {name: "Sarah", profileImg:"https://avatars3.githubusercontent.com/u/71769554?s=400&u=9fbfb665d6ef6b1f1af308d43efe467b9e45412b&v=4",isNew:false, postImg:"https://images.pexels.com/photos/5634667/pexels-photo-5634667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",postTime:19,comments:[{name:"Abdel rahman",text:"Nice 🤍"}],numLike:50,postLoc:"Amman, Jordan"},
        {name: "Mohammad", profileImg:"https://avatars1.githubusercontent.com/u/71769944?s=400&u=fd9f6f19861dbb2a0d1b72646faeb0b6386c7d70&v=4",isNew:false, postImg:"https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2020/03/instagram-coronavirus-video-calls-796x417.jpg",postTime:5,comments:[{name:"Abdel rahman",text:"Nice 🤍"}],numLike:65,postLoc:"Amman, Jordan"}
       
    ])
  return (
    <div className="posts">
      {info.map(post => (
          <Post name={post.name} profileImg={post.profileImg} isNew={post.isNew} postImg={post.postImg} postTime={post.postTime} comments={post.comments} numLike={post.numLike} postLoc={post.postLoc}/>
      ))}
    </div>
  );
}

export default Posts;



// import React from 'react';
// import './style.css'
// function Home() {

//   return (
//     <div className="">
      
//     </div>
//   );
// }

// export default Home;