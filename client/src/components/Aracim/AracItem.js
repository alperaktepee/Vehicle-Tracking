import React from "react";
import './AracItem.css'
const AracItem = (props) => {
  return (
    <div className="arac_container">
        <h1>Araç Bilgilerim</h1>  
        <div className="araclar">
    
        <div className="img">
          {props.image}
        </div>
        <div className="infos">
        <h3>Marka : {props.marka} </h3>
        <h3>Model : {props.model}</h3>
        <h3>Renk : {props.renk}</h3>
        <h3>Yıl : {props.yil}</h3>
        <h3>IMEI : {props.imei}</h3>
        <h3>Kontak Durumu : {props.kontak}</h3>
        </div>
      </div>
    </div>
  );
};

export default AracItem;
