import React from 'react';
import ProfileCards from './ProfileCards';
import "./styles/profileCard.css"
function App() {
const addProfile =()=>{

}
  return (
    <div className="App">
      {/* <form>
  <label>
    Name:
    <input type="text" id="name" />
  </label>
  <label>
  location:
    <input type="text" id="location" />
  </label>
  <label>
  title:
    <input type="text" id="title" />
  </label>
  <label>
  about:
    <input type="text" id="about" />
  </label>
  <label>
  backgroundImg:
    <input type="text" id="backgroundImg" />
  </label>
  <label>
  personalImg:
    <input type="text" id="personalImg" />
  </label>
  <label>
  facebook:
    <input type="text" id="location" />
  </label>
  <label>
  github:
    <input type="text" id="location" />
  </label>
  <label>
  linkedin:
    <input type="text" id="location" />
  </label>
</form>
<button onClick={addProfile}>test</button> */}
<ProfileCards />
    </div>
  );
}

export default App;
