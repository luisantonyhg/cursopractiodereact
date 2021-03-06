import React from 'react';
import {FaTwitter} from "react-icons/fa";
import '../componentes/styles/BadgeLista.css';

class BadgesList extends React.Component {
    render(){
        return(
                <ul className="list-unstyled BadgesList">
                   {this.props.badges.map((badge)=>{
                      return(
                         <li key={badge.id} className="BadgesListItem">
                            <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar"/>
                            <div>
                               <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                               <FaTwitter />
                               <div>{badge.jobTitle}</div>
                            </div>
                         </li>
                      )
        })}
      </ul>
    );
  }
}

export default BadgesList;