import React from 'react';


function ProfileCard(props) {
    const s = props.backgroundImg
    return(
        
        
  <div className="card">
    <div className="background-img" style={{backgroundImage: `url(${s})`}}>
      {/* <img src={props.backgroundImg} alt=""/> */}
      <button><i class="fas fa-pen"></i></button>
      
    </div>
    <div className="personal-img">
      <img src={props.personalImg} alt=""/>
    </div>
    <div className="card-body">
    <h3 className="name">{props.name}</h3>
    <p className="location">{props.location}</p>
    <p className="title">{props.title}</p>
    <p className="about">{props.about}</p>
    <div className="socialMedia-container">
    <i className="fab fa-github"></i>
    <i className="fab fa-linkedin"></i>
    <i className="fab fa-facebook"></i>
    </div>

    </div>
  </div>

    )
 
}
export default ProfileCard;