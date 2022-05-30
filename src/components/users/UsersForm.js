import React from "react";
import { TextField, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Button from "@mui/material/Button";
import "../styles/Usuarios.css";
const UsuarioForm = ({
  newUser,
  handleUpdateUser,
  setNewUser,
}) => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>Usuario</h1>
      <TextField
        disabled="true"
        value={newUser.nombre}
        label="Nombre del Usuario"
        variant="standard"
      />
      <TextField
        disabled="true"
        value={newUser.apellido}
        label="Apellidos"
        variant="standard"
      />
      <RadioGroup
        aria-label="position"
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      >
        <FormControlLabel value="admin" control={<Radio />} label="Administrador" />
        <FormControlLabel value="user" control={<Radio />} label="Usuario" />
      </RadioGroup>

      <Button
        variant="contained"
        color="success"
        onClick={() => handleUpdateUser()}
      >
        Actualizar usuario
      </Button>
    </>
  );
};
export default UsuarioForm;
