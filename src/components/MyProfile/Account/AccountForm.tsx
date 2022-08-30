import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { AccountFormik } from "../../../lib/hooks/useAccountFormik";

interface Props {
  formik: AccountFormik;
}

export const AccountForm = ({ formik }: Props) => {
  return (
    <>
      <h1>Account Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          width: "400px",
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          type="text"
          value={formik.values.username}
          name="username"
          onChange={formik.handleChange}
          label="Username"
          error={!!formik.errors.username && formik.touched.username}
          helperText={formik.touched.username && formik.errors.username}
        />

        <TextField
          sx={{ width: "100%" }}
          type="text"
          value={formik.values.email}
          name="email"
          onChange={formik.handleChange}
          label="Email"
          error={!!formik.errors.email && formik.touched.email}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          sx={{ width: "100%" }}
          type="text"
          value={formik.values.address}
          name="address"
          onChange={formik.handleChange}
          label="Address"
          error={!!formik.errors.address && formik.touched.address}
          helperText={formik.touched.address && formik.errors.address}
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </>
  );
};
