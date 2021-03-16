import { useState, useContext } from "react";
import Title from "../Title";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../NavButton";
import { AuthContext } from "../../context/newAuthContext";
// import axios from "axios";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("")

  const values = useContext(AuthContext);

  const closeErrorMessage = () => {
    setErrorMsg(false)
}

  return (
    <div className="py-5">
      <div className="container">
        <Title name="your" title="profile" />

        <div className="column">
        {errorMsg && <h3 className='auth-error-msg'>{errorMsg} <span onClick={closeErrorMessage}>X</span></h3>}
          <form className="col-1">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-btn"
              placeholder={`username`}
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-btn"
              placeholder={`password`}
              type="password"
            />
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input-btn"
              placeholder={`first name`}
            />
            <input
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              className="input-btn"
              placeholder={`last name`}
            />
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="input-btn"
              placeholder={`email`}
            />
            <input
              value={phoneNumber}
              onChange={(e) => setphoneNumber(e.target.value)}
              className="input-btn"
              placeholder={`phone number`}
            />
          </form>
          <div className="col-2">
            <img
              className="prof-img"
              alt="prof-img"
              src="https://media.restorationhardware.com/is/image/rhis/Ski_LP_M2_Hero?wid=1125&fmt=jpeg&qlt=85"
              width={500}
            ></img>
          </div>
        </div>
        <div className="update-profile">
          <Link to="/">
            <ButtonContainer
              onClick={() => values.register(username,password,email,firstName,lastName,phoneNumber,setErrorMsg) }
              // onClick={() => values.register(username,password,email,firstName,lastName,phoneNumber,setErrorMsg) }
                  // onClick={() => alert("You've recived a Welcome Email!")}
            >
              register
            </ButtonContainer>
              
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
