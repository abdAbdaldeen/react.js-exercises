import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import PPA from './images/myimgDB.png'
import PIosama from './images/osama.jpg'
import PPashrf from './images/Ashrf.jpg'
import "./styles/profileCard.css"

function ProfileCards() {
    const [users, setUsers]= useState([
        {name :"Abdel rahman",location:"Amman,Jordan",title:"Sharlek Holmes",about:"All imposters shiver when they hear my name",backgroundImg:"https://www.siff.net/images/EDUCATION/2019/2018_SIFF_EDU_class_Sherlocks_website_1600x900.jpg",personalImg:PPA,facebook:"https://www.facebook.com/abdalrahman.aldawaimah/",github:"https://github.com/abdAbdaldeen",linkedin:"https://www.linkedin.com/in/abd-abdaldeen/"},
        
        {name :"Osama Aburabie",location:"Amman,Jordan",title:"Frontend developer",about:"The boss of the MAFIA you mess with me consider your self DEAD!",backgroundImg:"https://wallpaperaccess.com/full/265413.jpg",personalImg:PIosama,facebook:"https://web.facebook.com/osamajamell",github:"https://github.com/OsamaAburabie",linkedin:"https://www.linkedin.com/in/osama-aburabi-e-1abb791b6/"},
        
        {name :"Ashrf Al-jabari",location:"Amman,Jordan",title:"Computer Science",about:"I'm a control FREAK!! give me the host! and I'll mute everyone!",backgroundImg:"https://cutewallpaper.org/21/sas-wallpaper/Custom-Wallpapers-For-All-Operators-27-1920x1080-.jpg",personalImg:PPashrf ,facebook:"https://web.facebook.com/aha.jaja9696",github:"https://github.com/ashraf-aljabari",linkedin:"https://www.linkedin.com/in/ashraf-aljabari/"},
        {name :"Monther Tawissi",location:"Jarash,Jordan",title:" Civil Engineer",about:"I'm civil engineer but i build cities of websites",backgroundImg:"https://www.intelligenthq.com/wp-content/uploads/2017/08/civil-engineering-2.jpg",personalImg:"https://osamaaburabie.github.io/react.js-exercises/static/media/4.47f30d25.jpg" ,facebook:"https://www.facebook.com/monthertwaissi",github:"https://github.com/Monther-Twaissi",linkedin:"https://www.linkedin.com/in/monther-twaissi/"},
        {name :"Khadeejah Hamdan",location:"Amman,Jordan",title:"Expert Lead Trainer",about:"I accuse everyone for no reason and get angry when they accuse me",backgroundImg:"https://media-exp1.licdn.com/dms/image/C4E16AQG373zKeTMfCg/profile-displaybackgroundimage-shrink_350_1400/0?e=1611187200&v=beta&t=bSmQEusQ-l-7ljfvYsc2AL5Fued1Q6k5Plg6CWPQiys",personalImg:"https://media-exp1.licdn.com/dms/image/C4D03AQGe4_04wqmMoQ/profile-displayphoto-shrink_800_800/0?e=1611187200&v=beta&t=McaMb9HMzXln2YYj8svFzVAZ29Cuwh1kH8xlQYGwsZE" ,facebook:"https://web.facebook.com/aha.jaja9696",github:"https://github.com/khadeejah-hamdan",linkedin:"https://www.linkedin.com/in/khadeejah-hamdan/"},
        {name :"Khadeejah Hamdan",location:"Amman,Jordan",title:"Hollywood actor after evening",about:"I am trained in the programming academy, but that does not prevent me from being a Hollywood actress after the evening",backgroundImg:"https://quotefancy.com/media/wallpaper/3840x2160/1237109-Randy-Orton-Quote-That-s-your-first-mistake-Do-not-trust-me.jpg",personalImg:"https://media-exp1.licdn.com/dms/image/C5603AQGzYuJ5d1yBIQ/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=bGSSPa42MJYDp-qm0kMfKAcTnCqUXmvprbL7XG8fmMw" ,facebook:"https://web.facebook.com/aha.jaja9696",github:"https://github.com/danatoughoj",linkedin:"https://www.linkedin.com/in/dana-toughoj/"}
        
          ]);


          return(
            <div>


<div className="flex-container">
            {users.map(user=>(
              <ProfileCard name={user.name} location={user.location} title={user.title} about={user.about} backgroundImg={user.backgroundImg} personalImg={user.personalImg} facebook={user.facebook} github={user.github} linkedin={user.linkedin} />
            ))}
           </div>
            </div>

          )
}
export default ProfileCards;