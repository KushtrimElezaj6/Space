import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { DefaultFormikOptions } from "./usePrivacyFormik";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Your password must be minimum 6 characters long")
    .required("Password is required"),
});

export interface LoginFields {
  username: string;
  password: string;
}

export const useLoginFormik = (props: DefaultFormikOptions<LoginFields>) => {
  return useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: LoginSchema,
    onSubmit: props.onSubmit,
  });
};

export type LoginFormik = ReturnType<typeof useLoginFormik>;
