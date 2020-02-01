import React from 'react';
import './App.css';
import Timeline from './Timeline.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particles from 'react-particles-js';
import spaceman from './spaceman.png';
import nasa from './nasa.png';
import linkedIn from './linkedIn.ico';
import facebook from './facebook.ico';
import twitter from './twitter.ico';
import youtube from './youtube.ico';
import website from './website.ico';

class App extends React.Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){
      AOS.init({
          duration : 2000
      })
  }
  render(){

    return (
      <div className="App">
        <div className="titleApp">
          <img className="nasaImg" src={nasa}/>
        </div>
        <div data-aos='fade-down' className="socialMedia">
          <a href="https://www.linkedin.com/company/nasa"><img src={linkedIn}/></a>
          <a href="https://www.facebook.com/NASA"><img src={facebook}/></a>
          <a href="https://twitter.com/NASA"><img src={twitter}/></a>
          <a href="https://www.youtube.com/user/NASAtelevision"><img src={youtube}/></a>
          <a href="https://www.nasa.gov"><img src={website}/></a>
        </div>
        <img className="spacemanImg" src={spaceman}/> 
        <Particles 
        params={{
          
          "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "line_linked": {
                "enable": true,
                "opacity": 0.02
            },
            "move": {
                "direction": "right",
                "speed": 0.1
            },
            "size": {
                "value": 2.3
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "speed": 3,
                    "opacity_min": 0.05
                }
            }
        },
        "interactivity": {
            "events": {
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            },
            "modes": {
                "push": {
                    "particles_nb": 1
                }
            }
        },
        "retina_detect": true
              }
          }
      >

        </Particles>
        <Timeline/>
        
      </div>
    );
  }
}

export default App;
