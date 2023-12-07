import React from "react";

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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        elevation={8}
        sx={{
          maxWidth: 1000,
          minWidth: 300, // Smaller minWidth for smaller screens
          borderRadius: "24px",
          height: "auto", // Changed to 'auto' for better responsiveness
          backgroundImage: "linear-gradient(to right, #ffafbd, #ffc3a0)",
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
                }}
              >
                Get started!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              {" "}
              {/* Adjusts size based on screen */}
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <TextField
                label="Name"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <>
                    Agree if you have accepted to
                    <a
                      href="https://generator.lorem-ipsum.info/terms-and-conditions"
                      style={{ textDecoration: "none", marginLeft: "5px" }}
                    >
                      terms and conditions
                    </a>
                  </>
                }
                sx={{ justifyContent: "center" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={8}
              lg={8}
              xl={8}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ maxWidth: "60%", minWidth: "60%", margin: "0 auto" }}
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
                  href="https://www.google.com"
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
