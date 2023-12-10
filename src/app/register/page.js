"use client";
import React, { useEffect } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Card,
  CardContent,
  Typography,
  InputAdornment,
  IconButton,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Grid,
} from "@mui/material";

const RegisterPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [conPasswordError, setConPasswordError] = React.useState("");
  const [conPassword, setConPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    console.log(`Email is updated to ${email}`);
  }, [email]);
  useEffect(() => {
    console.log(`Password is updated to ${password}`);
  }, [password]);

  useEffect(() => {
    if (password === "" || password === null || password === undefined) {
      setPasswordError("Password required");
    } else {
      setPasswordError("");
    }
  }, [password]);
  /* useEffect(() => {
    if (
      conPassword === "" ||
      conPassword === null ||
      conPassword === undefined
    ) {
      setConPasswordError("Password required");
    } else {
      setConPasswordError("");
    }
  }, [conPassword]); */

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleConPasswordChange(e) {
    setConPassword(e.target.value);
    if (e.target.value === password) {
      setConPasswordError("");
    } else {
      setConPasswordError("Passwords do not match");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        /* background */
      }}
    >
      <Card
        elevation={8}
        sx={{
          maxWidth: 700,
          minWidth: 270, // Smaller minWidth for smaller screens
          borderRadius: "24px",
          height: "auto", // Changed to 'auto' for better responsiveness
          backgroundImage: "linear-gradient(to right, #91F1EF, #FFD5E0)",
          margin: "normal",
        }}
      >
        <CardContent>
          <Grid container spacing={2} justifyContent="center">
            {" "}
            {/* Grid container */}
            <Grid item xs={12}>
              {" "}
              {/* Full width on all screens */}
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 500,
                  textAlign: "center",
                  mt: { xs: 4, sm: 6, md: 8 }, // Responsive margin-top
                }}
              >
                Get started!
              </Typography>
            </Grid>
            <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
              {" "}
              {/* Adjusts size based on screen */}
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                /* error={passwordError} */
                helperText={passwordError}
                /* onChange={handlePasswordChange} */
                variant="outlined"
                sx={{ width: "100%" }}
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
              <TextField
                label="Confirm Password"
                type="password"
                /* value={password}
                onChange={handlePasswordChange} */
                value={conPassword}
                onChange={handleConPasswordChange}
                /* error={passwordError} */
                helperText={conPasswordError}
                /* onChange={handlePasswordChange} */
                variant="outlined"
                sx={{ width: "100%" }}
                margin="normal"
              />
            </Grid>
            <Grid item xs={10} sm={8} md={8} lg={8} xl={8}>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    Agree if you have accepted the
                    <a
                      href="https://generator.lorem-ipsum.info/terms-and-conditions"
                      style={{ textDecoration: "none", marginLeft: "5px" }}
                    >
                      terms and conditions
                    </a>
                  </>
                }
                sx={{
                  justifyContent: "center",
                  marginBottom: { xs: 7, sm: 10, md: 10, lg: 10, xl: 12 },
                  marginTop: -2,
                  "& .MuiFormControlLabel-label": {
                    fontSize: {
                      xs: "0.75rem",
                      sm: "0.875rem",
                      md: "0.875rem",
                      lg: "0.875rem",
                    }, // Responsive font sizes
                  },
                }}
              />
            </Grid>
            <Grid
              item
              xs={10}
              sm={8}
              md={8}
              lg={8}
              xl={8}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                color="primary"
                fullWidth
                margin="normal"
                /* onClick={handleSubmit} */
                sx={{
                  minwidth: "100%",
                }}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body2"
                component="div"
                gutterBottom
                sx={{ fontSize: "12px", textAlign: "center" }}
              >
                Already registered?{"   "}
                <a
                  href="http://localhost:3002/login"
                  style={{ textDecoration: "none", marginLeft: "5px" }}
                >
                  Sign In
                </a>
                .
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
