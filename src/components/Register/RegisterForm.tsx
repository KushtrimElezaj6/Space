import {
  Box,
  Button,
  Container,
  createTheme,
  CssBaseline,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RegisterFormik } from "../../lib/hooks/useRegisterFormik";

interface Props {
  formik: RegisterFormik;
}

const theme = createTheme();

export const RegisterForm = ({ formik }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="username"
                  name="username"
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={!!formik.errors.username && formik.touched.username}
                  helperText={formik.touched.username && formik.errors.username}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={!!formik.errors.gender && formik.touched.gender}
                >
                  <InputLabel>Gender</InputLabel>
                  <Select
                    name="gender"
                    autoComplete="gender"
                    id="gender"
                    value={formik.values.gender}
                    label="Gender"
                    onChange={formik.handleChange}
                    // helperText={formik.touched.gender && formik.errors.gender}
                  >
                    <MenuItem value="M">Male</MenuItem>
                    <MenuItem value="F">Female</MenuItem>
                  </Select>
                  {formik.errors.gender && formik.touched.gender && (
                    <FormHelperText sx={{ color: "red", fontSize: "12px" }}>
                      {formik.errors.gender}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={!!formik.errors.email && formik.touched.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="age"
                  type="number"
                  label="Age"
                  id="age"
                  autoComplete="Age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  error={!!formik.errors.age && formik.touched.age}
                  helperText={formik.touched.age && formik.errors.age}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Preferences</InputLabel>
                  <Select
                    name="preferences"
                    id="preferences"
                    label="Preferences"
                    value={formik.values.preferences}
                    onChange={formik.handleChange}
                  >
                    <MenuItem value="Action">Action</MenuItem>
                    <MenuItem value="Comedy">Comedy</MenuItem>
                    <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
                    <MenuItem value="Drama">Drama</MenuItem>
                    <MenuItem value="Thriller">Thriller</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="Password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={!!formik.errors.password && formik.touched.password}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  label="ConfirmationPassword"
                  name="confirmationPassword"
                  id="confirmationPassword"
                  onChange={formik.handleChange}
                  value={formik.values.confirmationPassword}
                  error={
                    !!formik.errors.confirmationPassword &&
                    formik.touched.confirmationPassword
                  }
                  helperText={
                    formik.touched.confirmationPassword &&
                    formik.errors.confirmationPassword
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">{"Already have an account? Log in"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
