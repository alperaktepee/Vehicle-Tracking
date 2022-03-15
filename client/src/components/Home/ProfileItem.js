import React from 'react'
import './ProfileItem.css'
const ProfileItem = (props) => {
  
  
    return (
    <div>
         
        <h1>Profil</h1>  
        <div className="profile">
    
        
        <div className="profileinfos">
        <h2>Ad : {props.ad} </h2>
        <h2>Soyad : {props.soyad}</h2>
        <h2>E-mail : {props.email}</h2>
        <h2>Aracım : {props.car}</h2>
        </div>
     
    </div>
    </div>
  )
}

export default ProfileItem
