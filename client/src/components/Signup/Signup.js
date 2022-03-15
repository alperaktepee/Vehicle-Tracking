import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleInput = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
			console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Zaten Üyeyim</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Giriş Yap
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Hesap Oluştur</h1>
            <input
              type="text"
              placeholder="İsim"
              name="firstName"
              onChange={handleInput}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Soyisim"
              name="lastName"
              onChange={handleInput}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              onChange={handleInput}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Şifre"
              name="password"
              onChange={handleInput}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
           
           
            <button type="submit" className={styles.green_btn}>
              Kayıt Ol
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
