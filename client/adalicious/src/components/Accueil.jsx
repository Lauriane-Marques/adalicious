import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/accueil.css";

function Accueil() {
  const [firstname, setFirstname] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/menu', { state: { firstname } }); 
  };

  return (
    <div className="accueil-container">
      <img className="logo-img" src="./src/assets/broccoli.png" alt="Logo" />
      <h1 className="welcome">Bienvenue sur Adalicious</h1>
      <form className="form" onSubmit={handleSubmit}>
        <p className="input-label">Pour commencer, peux-tu me donner ton prénom :</p>
        <input 
          name="firstname" 
          className="firstname-input" 
          value={firstname} 
          onChange={handleChange} 
        />
        <button className="submit-button" type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Accueil;



// const getFirstname = async () => {

// const response = await fetch("http://localhost:3000/firstname", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ firstname })
// });

//     const data = await response.json();
//     navigate("/");}}