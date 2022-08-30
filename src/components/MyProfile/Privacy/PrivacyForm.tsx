import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { PrivacyFormik } from "../../../lib/hooks/usePrivacyFormik";

interface Props {
  formik: PrivacyFormik;
}

export const PrivacyForm = ({ formik }: Props) => {
  return (
    <>
      <h1>Privacy Form</h1>
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
          type="password"
          label="Current Password"
          name="currentPassword"
          onChange={formik.handleChange}
          value={formik.values.currentPassword}
          error={
            !!formik.errors.currentPassword && formik.touched.currentPassword
          }
          helperText={
            formik.touched.currentPassword && formik.errors.currentPassword
          }
        />

        <TextField
          sx={{ width: "100%" }}
          type="password"
          label="New Password"
          name="newPassword"
          onChange={formik.handleChange}
          value={formik.values.newPassword}
          error={!!formik.errors.newPassword && formik.touched.newPassword}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />

        <TextField
          sx={{ width: "100%" }}
          type="password"
          label="ConfirmationPassword"
          name="confirmationPassword"
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

        <Button type="submit" variant="contained">
          Save
        </Button>
      </form>
    </>
  );
};
