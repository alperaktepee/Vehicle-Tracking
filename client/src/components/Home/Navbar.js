import React from 'react'
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const history = useNavigate();
    const handleLogout = (e) => {
      e.preventDefault();
      history("/login");
    };
  return (
    <div>
             <nav className={styles.navbar}>
      <Link className={styles.navbara} to="/home">
        <h5>ARAÇ TAKİP SİSTEMİ</h5>
        </Link>

        <Link className={styles.navbara} to="/konum">
          Konum
        </Link>

        <Link className={styles.navbara} to="/araclarim">
          Aracım
        </Link>

        <Link className={styles.navbara}to="/profil">
          Profil
        </Link>
        <button className={styles.white_btn} onClick={handleLogout}>
          Çıkış Yap
        </button>
      </nav>
    </div>
  )
}

export default Navbar