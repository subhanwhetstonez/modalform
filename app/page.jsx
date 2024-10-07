"use client";
import {
  Box,
  Button,
  Container,
  Modal,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import Formbtn from "@/components/button";
import { useState } from "react";
import Form from "@/components/form";
import { theme } from "@/components/theme";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          sx={{
            display: "grid",
            justifyContent: "center",
            position: "relative",
            top: 50,
            height: "100vh",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <div>
            <h2>Open Modal To Submit Data</h2>
          </div>
          <div>
            <Button onClick={handleOpen} variant="contained">
              Open modal
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60%",
                  bgcolor: "background.paper",
                  border: "2px solid #000",
                  boxShadow: 24,
                  justifyContent: "center",
                  alignContent: "center",
                  display: "grid",
                  p: 4,
                }}
              >
                <Box>
                  <Typography variant="h4" sx={{ textAlign: "center" }}>
                    Register Form
                  </Typography>
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Form />
                </Box>
              </Box>
            </Modal>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Home;
