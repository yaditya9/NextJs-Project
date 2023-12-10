"use client";
import React, { useEffect } from "react";

import {
  Card,
  CardContent,
  Typography,
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

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        /* background:
          "linear-gradient(to bottom right, #008170, #005B41, #232D3F, #0F0F0F)", */
        m: 0,
        p: 0,
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
                Log In!
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
                type="password"
                value={password}
                onChange={handlePasswordChange}
                /* error={passwordError} */
                helperText={passwordError}
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
                      md: "0.75rem",
                      lg: "0.5",
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
                Forgot Password?{"   "}
                <a
                  href="http://localhost:3002/register"
                  style={{ textDecoration: "none", marginLeft: "5px" }}
                >
                  Click Here!
                </a>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
