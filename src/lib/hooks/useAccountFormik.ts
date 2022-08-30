import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { DefaultFormikOptions } from "./usePrivacyFormik";

const AccountSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Your username must be minimum 3 characters long")
    .required("Email is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  address: Yup.string()
    .min(5, "Your address must be minimum 5 characters long")
    .required("Address is required"),
});

export interface AccountFields {
  username: string;
  email: string;
  address: string;
}

export const useAccountFormik = (
  props: DefaultFormikOptions<AccountFields>
) => {
  return useFormik<AccountFields>({
    initialValues: {
      username: "",
      email: "",
      address: "",
    },
    validateOnBlur: true,
    validateOnChange: true,
    validationSchema: AccountSchema,
    onSubmit: props.onSubmit,
  });
};

export type AccountFormik = ReturnType<typeof useAccountFormik>;
