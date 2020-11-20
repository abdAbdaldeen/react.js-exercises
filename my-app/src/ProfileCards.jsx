import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import "./styles/profileCard.css"

function ProfileCards() {
    const [users, setUsers]= useState([
        {name :"Abdel rahman",location:"Amman,Jordan",title:"Full Stack developer",about:"Programmer No dates, only updates",backgroundImg:"https://i.pinimg.com/originals/83/13/f6/8313f67d2546e50652d4e31f74a1a789.png",personalImg:"https://media-exp1.licdn.com/dms/image/C4D03AQGD-j22IOWD0w/profile-displayphoto-shrink_400_400/0/1602789110444?e=1611187200&v=beta&t=Vz4KYWBYyDYDEWv3SC7yuuEh-7PxuwIl-X0nA0qYM_Q",facebook:"https://www.facebook.com/abdalrahman.aldawaimah/",github:"https://github.com/abdAbdaldeen",linkedin:"https://www.linkedin.com/in/abd-abdaldeen/"},
        
        {name :"Osama Aburabie",location:"Amman,Jordan",title:"Frontend developer",about:"The boss of the MAFIA you mess with me consider your self DEAD!",backgroundImg:"https://wallpaperaccess.com/full/265413.jpg",personalImg:"https://osamaaburabie.github.io/react.js-exercises/static/media/3.e64bf312.jpg",facebook:"https://web.facebook.com/osamajamell",github:"https://github.com/OsamaAburabie",linkedin:"https://www.linkedin.com/in/osama-aburabi-e-1abb791b6/"},
        
        {name :"Ashrf Al-jabari",location:"Amman,Jordan",title:" developer",about:"I'm a control FREAK!! give me the host! and I'll mute everyone!",backgroundImg:"https://cutewallpaper.org/21/sas-wallpaper/Custom-Wallpapers-For-All-Operators-27-1920x1080-.jpg",personalImg:"https://scontent.famm3-3.fna.fbcdn.net/v/t1.0-9/107667568_1491472724370174_3093765331337990034_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEWTN_v9gg1rP3oh6dT5kXw4bBJZDWvQHfhsElkNa9Ad3cnV501R5B8XCDVuNpyWFJKUy7rPc5ivlw4PL_zUBGm&_nc_ohc=VUuhlPFc0tgAX-DhGOC&_nc_ht=scontent.famm3-3.fna&oh=ce9d5692938acbd5f6f9b2ecf3417324&oe=5FDC1BF1",facebook:"https://web.facebook.com/aha.jaja9696",github:"https://github.com/ashraf-aljabari",linkedin:"https://www.linkedin.com/in/ashraf-aljabari/"}
        
          ])
          return(
            <div className="flex-container">
            {users.map(user=>(
              <ProfileCard name={user.name} location={user.location} title={user.title} about={user.about} backgroundImg={user.backgroundImg} personalImg={user.personalImg} facebook={user.facebook} github={user.github} linkedin={user.linkedin} />
            ))}
           </div>
          )
}
export default ProfileCards;