import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { DefaultFormikOptions } from "./usePrivacyFormik";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Your username must be minimum 3 characters long")
    .required("Email is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  age: Yup.number()
    .min(16, "You age must be above 16")
    .required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  preferences: Yup.string(),
  password: Yup.string()
    .min(6, "Your password must be minimum 6 characters long")
    .required("Password is required"),
  confirmationPassword: Yup.string().when("password", {
    is: (val: string) => val && val.length > 0,
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password and Confirm password don't match"
    ),
  }),
});

export interface RegisterFields {
  username: string;
  email: string;
  age: number;
  gender: string;
  preferences: string;
  password: string;
  confirmationPassword: string;
}

export const useRegisterFormik = (
  props: DefaultFormikOptions<RegisterFields>
) => {
  return useFormik<RegisterFields>({
    initialValues: {
      username: "",
      email: "",
      age: 0,
      gender: "",
      preferences: "",
      password: "",
      confirmationPassword: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: RegisterSchema,
    onSubmit: props.onSubmit,
  });
};

export type RegisterFormik = ReturnType<typeof useRegisterFormik>;
