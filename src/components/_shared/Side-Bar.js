import React, { Component } from 'react';
import logo from './../../assets/logos/logo.png';
import profilePhoto from './../../assets/photos/paulo.jpg';
import Typography from '@material-ui/core/Typography';

class SideBar extends Component {
  render() {
    return (
      <div>
        {/* Logo */}
        <div className="pflex-row pflex-center pt+ pb+">
          <img src={logo} alt="Peers CAPX Enterprise" height="70px"/>
        </div>

        {/* Profile Picture */}
        <div className="pflex-row pflex-center pt+ pb+">
          <img src={profilePhoto} alt="" height="90px" style={{borderRadius: '50%'}}/>
        </div>

        <hr className="ml+ mr+" />
        
        {/*  Options */}
        <div className="pflex-row pt+ pb+">

          <Typography variant="body2" gutterBottom className="white-text">
            Display 4
          </Typography>
          <Typography variant="body2" gutterBottom className="white-text">
            Display 4
          </Typography>
        </div>

      </div>
    );
  }
}

export default SideBar;