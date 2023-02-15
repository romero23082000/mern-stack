import React from "react";
import PropTypes from "prop-types";
import { Navigate, useNavigate } from "react-router-dom";
import background from "../../assets/image/low-poly-grid-haikei.svg";
import styles from "./loginStyles-jss";
import { withStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginForm = (props) => {
  const { classes } = props;
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    props.onLogin("Andres123");
    navigate("/home");
  };
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className={classes.divLogin}
    >
      <Box
        sx={{
          width: 250,
          height: 250,
          backgroundColor: "#fff",
          borderRadius: "15px",
          textAlign: "center",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h2 style={{ marginBottom: "12px", marginTop: "0px" }}>
          Iniciar sesión
        </h2>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: "12px" }}>
            <TextField label="User name" type="text" size="small" />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <TextField label="Password" type="password" size="small" />
          </div>
          <Button
            size="small"
            variant="contained"
            type="submit"
            style={{ textTransform: "inherit" }}
          >
            Iniciar sesión
          </Button>
        </form>
      </Box>
    </div>
  );
};

// LoginForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   handleUsernameChange: PropTypes.func.isRequired,
//   handlePasswordChange: PropTypes.func.isRequired,
//   username: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };

export default withStyles(styles)(LoginForm);
