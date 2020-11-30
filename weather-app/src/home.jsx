import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { WindMillLoading } from 'react-loadingg';
import './style/style.css'
const key = '602d7d33ca42b5a47e216dd14db8d1f5';
class Home extends Component {
    state = { 
        isLoading: true,
        locationName : '',
        temp:0,
        icon:"",
     }

     componentDidMount(){
        this.setState({ 
            isLoading: true,
         })
       navigator.geolocation.getCurrentPosition( (position)=> {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
        .then(response => response.json())
          .then(data => {
              this.setState({ 
                isLoading: false,
                locationName : data.name,
                temp:data.main.temp,
                icon: data.weather[0].icon,
             })
          })
          .catch(err => {
            console.log("Error Reading data " + err);
          });
        });

    }
    render() { 
if (this.state.isLoading) {
    return(
        <div className="loading">
            <WindMillLoading speed='2'/>
        </div>
        
    )
}
let iconurl = "http://openweathermap.org/img/w/" + this.state.icon + ".png";
let temp = Math.round(this.state.temp- 273.15);
        return ( 
            <div className="home">
                <h1>{this.state.locationName}</h1>
                <div className="flex-c">
                <h2>{temp} °C</h2>
                <img src={iconurl} alt=""/>
                </div>
                
            </div>
         );
    }
}
 
export default Home;