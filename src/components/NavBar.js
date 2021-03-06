import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../firebase";
import { handleLogin } from "../features/userSlice";
import { useDispatch } from "react-redux";
import "./styles/NavBar.css";
const NavBar = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(handleLogin());
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="nav">
      <div style={{ width: "300px", justifyContent: "end" }}>
        <ul className="nav__links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/sales">Ventas</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/users">Usuarios</Link>
          </li>
        </ul>
      </div>
      <Avatar
        alt={user.name}
        src={user.photo}
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/")}
      />
      <div style={{ width: "300px", textAlign: "right" }}>
        <Button
          color="error"
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={() => handleSignOut()}
        >
          DESLOGUEARSE
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
