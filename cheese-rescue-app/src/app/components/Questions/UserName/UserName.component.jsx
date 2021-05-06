import React from "react";
import "./UserName.component.scss";
import { PlayerContext } from "../../../context/PlayerProvider/PlayerProvider";

const UserName = ({ setQuestion, setNameUser }) => {
  const [dataKid, setDataKid] = React.useState({ id: 0, name: "" });
  const { playerControl } = React.useContext(PlayerContext);

  const handleInputChange = (event) => {
    setDataKid({
      ...dataKid,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    setNameUser(dataKid.name);
    localStorage.setItem("Nombre", dataKid.name);
    setQuestion("");
    playerControl.setPlaying(true);
    // console.log("enviando datos..." + dataKid.id + " " + dataKid.name);
  };

  return (
    <div className="o-container-name">
      <div className="o-container-form-name">
        <form onSubmit={sendData}>
          <input
            type="text"
            placeholder="Ingresa tú nombre"
            className="o-form-control"
            onChange={handleInputChange}
            name="name"
          />
          <button className="o-btn-continue" type="submit">
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserName;
