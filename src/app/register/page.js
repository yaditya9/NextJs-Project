import React from "react";
import { Box } from "@mui/material";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

const RegisterPage = () => {
  return (
    <Box
      style={{
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
          minWidth: 600,
          borderRadius: "24px",
          height: "95vh",
          /* backgroundColor: "lavender", */
          backgroundImage: "linear-gradient(to right, #ffafbd, #ffc3a0)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "Roboto, sans-serif", fontWeight: 500 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "60px",
            }}
          >
            Get started!
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "30px",
            }}
          >
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              sx={{
                "& .MuiInputBase-input": {
                  height: "15px", // Adjust this value as needed
                  /* padding: "5px", // Adjust padding to control height */
                  fontSize: "14px", // Optional: Adjust font size if needed
                },
                width: "60%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px", // Rounds the corners of the outline
                  backgroundColor: "white",
                },
              }}
            />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <TextField
              label="Name"
              type="text"
              variant="outlined"
              sx={{
                "& .MuiInputBase-input": {
                  height: "15px", // Adjust this value as needed
                  /* padding: "5px", // Adjust padding to control height */
                  fontSize: "14px", // Optional: Adjust font size if needed
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px", // Rounds the corners of the outline
                  backgroundColor: "white",
                },
                width: "60%",
              }}
              margin="normal"
            />
          </Box>

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
            sx={{
              "& .MuiFormControlLabel-label": {
                // Targeting the label specifically
                fontSize: "13px", // Adjust the font size as needed
              },
              marginLeft: "105px",
              marginTop: "10px",
            }}
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "30px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: "30px" }}
              sx={{ width: "60%" }}
            >
              Submit
            </Button>
          </Box>
          <Typography
            variant="body2"
            component="div"
            gutterBottom
            sx={{
              fontSize: "12px",
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
