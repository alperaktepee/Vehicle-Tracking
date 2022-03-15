import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>Şirket</h4>
          <ul>
            <li><a href="#">Hakkımızda</a></li>
            <li><a href="#">Hizmetlerimiz</a></li>
            <li><a href="#">Gizlilik Politikası</a></li>
            <li><a href="#">Ortaklıklar</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Yardım Al</h4>
          <ul>
            <li><a href="#">SSS</a></li>
            <li><a href="#">Ulaşım</a></li>
            <li><a href="#">Geri Dönüş</a></li>
            <li><a href="#">Sipariş Durumu</a></li>
            <li><a href="#">Ödeme Seçenekleri</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Araçlar</h4>
          <ul>
            <li><a href="#">Fikir Öner</a></li>
            <li><a href="#">Hata Raporla</a></li>
            <li><a href="#">Uygulama</a></li>
 
          </ul>
        </div>
        <div className="footer-col">
          <h4>Bizi Takip Edin</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
 </footer>
  )
}

export default Footer

