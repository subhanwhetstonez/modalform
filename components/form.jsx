import {
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import React from "react";
import Formbtn from "@/components/button";
import { theme } from "./theme";

const ITEM_HEIGHT = 46;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "English",
  "Urdu",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Statistics",
  "Islamic Studies",
];

const roles = ["Teacher", "Parent", "Student"];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const Form = () => {
  const [personName, setPersonName] = React.useState([]);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [role, setRole] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = () => {
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      subjects: personName,
      role,
    };
    console.log(formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <FormControl
          sx={{
            m: 1,
            width: "100%",
            display: "grid",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label={"Your First Name"}
              variant="filled"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label={"Your Last Name"}
              variant="filled"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label={"Your Email"}
              variant="filled"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label={"Phone No."}
              variant="filled"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label={"Your Password"}
              variant="filled"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label={"Confirm Password"}
              variant="filled"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box>
              <label style={{ fontWeight: 600 }}>Subjects</label>
              <br />
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
                sx={{ width: 220 }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box>
              <label style={{ fontWeight: 600 }}>Who Are You?</label>
              <br />
              <Select
                sx={{ width: 220 }}
                value={role}
                onChange={handleRoleChange}
              >
                {roles.map((role) => (
                  <MenuItem key={role} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
          <Box>
            <Formbtn btntxt={"Submit"} onClick={handleSubmit} />
          </Box>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};

export default Form;
